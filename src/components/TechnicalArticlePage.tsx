const evidenceUrl = 'https://github.com/Billyflin/sap-cap-fiori-btp';
const adrUrl = `${evidenceUrl}/blob/main/docs/adr/0003-integration-suite-delivery-blueprint.md`;

export function TechnicalArticlePage() {
  return <>
    <a className="skip-link" href="#article-content">Skip to article</a>
    <header className="article-header">
      <a className="brand" href="/" aria-label="Return to Billy Martínez’s portfolio">BM<span>/26</span></a>
      <nav aria-label="Article navigation">
        <a href="/">Portfolio</a>
        <a href={evidenceUrl} target="_blank" rel="noreferrer">Source evidence <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <main id="article-content" className="article-page">
      <header className="article-hero">
        <p className="section-kicker">Engineering note · API reliability</p>
        <h1>Reliable API integrations start by assuming delivery will fail.</h1>
        <p className="article-deck">A practical blueprint for retry-safe delivery with a transactional outbox, stable idempotency keys, explicit failure classes, and auditable replay.</p>
        <div className="article-byline">
          <span>By <a href="/">Billy Martínez</a></span>
          <span>29 August 2026</span>
          <span>6 min read</span>
        </div>
        <ul className="article-tags" aria-label="Article topics">
          <li>API integrations</li>
          <li>Idempotency</li>
          <li>Transactional outbox</li>
          <li>SAP CAP</li>
          <li>Failure design</li>
        </ul>
      </header>

      <div className="article-layout">
        <aside className="article-toc" aria-label="Table of contents">
          <p>Contents</p>
          <a href="#problem">The real problem</a>
          <a href="#boundary">Choose the boundary</a>
          <a href="#identity">Identity before retries</a>
          <a href="#errors">Classify failures</a>
          <a href="#operations">Design for operations</a>
          <a href="#validation">Prove the guarantees</a>
        </aside>

        <article className="article-body">
          <p className="article-lede">Most integration diagrams draw a clean arrow from one system to another. Production behaves more like a negotiation between partial failures: the source commits, the network times out, the receiver succeeds, and the response disappears. If the design treats that sequence as an exception, retries will eventually create a duplicate or a human will reconstruct state from logs.</p>

          <section id="problem">
            <p className="article-section-number">01</p>
            <h2>The real problem is not transport. It is preserving intent.</h2>
            <p>Suppose a CAP service accepts an order and an S/4HANA API must receive it. Calling the destination inside the original HTTP request looks simple, but it couples the local business transaction to remote latency and availability. If the remote call fails before the local commit, the user waits. If the local commit succeeds and the remote response is lost, the source cannot know whether retrying is safe.</p>
            <p>The requirement should therefore be written as an invariant: <strong>once the source accepts an order, the intent to deliver it must survive process, network, and destination failures without creating the same business effect twice.</strong></p>
            <blockquote>“Exactly once” is rarely a transport feature. What matters is one durable intent plus idempotent handling of repeated delivery.</blockquote>
          </section>

          <section id="boundary">
            <p className="article-section-number">02</p>
            <h2>Commit the business change and delivery intent together.</h2>
            <p>A transactional outbox moves the unreliable work outside the request while keeping the decision atomic. The source transaction updates business state and inserts an immutable delivery record. A separate publisher sends committed records to the messaging boundary. The request no longer waits for the destination, and a publisher crash does not erase the accepted order.</p>

            <figure className="article-diagram">
              <div><strong>Fiori / API</strong><span>submitOrder</span></div>
              <i aria-hidden="true">→</i>
              <div className="article-diagram--accent"><strong>CAP + HANA</strong><span>stock + outbox<br />one transaction</span></div>
              <i aria-hidden="true">→</i>
              <div><strong>Messaging</strong><span>durable handoff</span></div>
              <i aria-hidden="true">→</i>
              <div><strong>Integration flow</strong><span>validate + map</span></div>
              <i aria-hidden="true">→</i>
              <div><strong>S/4HANA API</strong><span>idempotent effect</span></div>
              <figcaption>Logical delivery boundary. The exact adapter remains a deployment decision; durable handoff is the invariant.</figcaption>
            </figure>

            <p>Three details keep this pattern honest:</p>
            <ul>
              <li>The outbox record is written in the same database transaction as the business change.</li>
              <li>The publisher marks it delivered only after the messaging boundary acknowledges it.</li>
              <li>The original payload and identifiers survive every retry and operator replay.</li>
            </ul>

            <pre><code>{`{
  "eventId": "8f359e80-84c8-4e43-9ba1-e4462eb32255",
  "eventType": "book.order.accepted",
  "schemaVersion": 1,
  "correlationId": "request-or-trace-id",
  "idempotencyKey": "order:8f359e80:s4-create",
  "order": { "bookId": 201, "quantity": 2 }
}`}</code></pre>
            <p>The event deliberately excludes user identity unless the receiver has a documented need and retention policy. An integration contract should carry the minimum data needed to perform the business effect, not a copy of the source system.</p>
          </section>

          <section id="identity">
            <p className="article-section-number">03</p>
            <h2>Give the business effect a stable identity before adding retries.</h2>
            <p>The transport should be treated as at-least-once. Duplicate delivery is normal: an acknowledgement may be lost, a consumer may restart after committing, or an operator may replay a quarantined message. The receiver must therefore remember successful <code>idempotencyKey</code> values and return the original outcome when the same intent arrives again.</p>
            <p>The idempotency key identifies the intended receiver-side effect—not an HTTP attempt. Generating a new key during each retry defeats the mechanism. A stable <code>eventId</code> identifies the immutable fact; a stable <code>idempotencyKey</code> identifies what the receiver should do once.</p>
            <p>If the destination cannot enforce idempotency, the integration boundary needs a durable lookup before the design can claim safe retries. That is less elegant than destination-side support, but it is still better than hoping duplicates are rare.</p>
          </section>

          <section id="errors">
            <p className="article-section-number">04</p>
            <h2>Retry policies need a failure taxonomy.</h2>
            <p>“Retry three times” is not an error strategy. A closed accounting period will not open because the same payload arrived again, while a temporary 503 may recover in seconds. The flow should classify failures before choosing an action.</p>
            <div className="article-table-wrap">
              <table>
                <thead><tr><th>Failure class</th><th>Examples</th><th>Policy</th></tr></thead>
                <tbody>
                  <tr><td>Business / terminal</td><td>Invalid material, rejected state</td><td>Do not blind-retry. Route a safe reason code for business action.</td></tr>
                  <tr><td>Authentication</td><td>Expired credential, missing scope</td><td>Stop, alert, and correct the credential without leaking it into logs.</td></tr>
                  <tr><td>Transient transport</td><td>Timeout, 429, temporary 5xx</td><td>Bounded exponential backoff with jitter; honor <code>Retry-After</code>.</td></tr>
                  <tr><td>Contract / mapping</td><td>Unknown version, missing field</td><td>Quarantine the original message and replay only after correction.</td></tr>
                </tbody>
              </table>
            </div>
            <p>Once the retry budget is exhausted, the event belongs in a durable error path. Reprocessing must use the original identifiers, record who or what initiated the replay, and remain visible to operations.</p>
          </section>

          <section id="operations">
            <p className="article-section-number">05</p>
            <h2>Make recovery observable without exposing secrets.</h2>
            <p>An operator should be able to answer three questions without reading raw application logs: what was accepted, where delivery stopped, and whether replay is safe. That requires a small, consistent telemetry contract across the source, messaging layer, integration flow, and receiver.</p>
            <ul>
              <li>Log <code>eventId</code>, <code>correlationId</code>, schema version, flow step, attempt count, outcome, and a safe error category.</li>
              <li>Measure accepted, delivered, retried, quarantined, and oldest-undelivered events.</li>
              <li>Alert on sustained failure and outbox age, not on a single transient retry.</li>
              <li>Never log access tokens, authorization headers, complete remote error bodies, or unnecessary personal data.</li>
            </ul>
            <p>Credentials should come from a destination or service binding using the strongest authentication supported by the target. The integration identity gets only the scopes and operations it needs. Rotation must not require a code release.</p>
          </section>

          <section id="validation">
            <p className="article-section-number">06</p>
            <h2>Architecture becomes a guarantee only after adversarial tests.</h2>
            <p>A diagram cannot prove that the outbox is atomic or that replay is safe. Before calling this design production-ready, I would require evidence for each failure boundary:</p>
            <ol>
              <li>A commit/rollback test proves the stock update and outbox record are atomic.</li>
              <li>A duplicate-delivery test proves one destination-side business effect.</li>
              <li>Retry tests cover timeout, 429 with <code>Retry-After</code>, and temporary 5xx responses.</li>
              <li>Contract tests reject unsupported versions while preserving the quarantined payload.</li>
              <li>A trace review follows one <code>correlationId</code> end to end.</li>
              <li>A replay test preserves the original idempotency key and records the actor and reason.</li>
            </ol>
            <p>The practical goal is not a system that never fails. It is a system whose failures are bounded, explainable, and recoverable without creating a second business effect.</p>
          </section>

          <aside className="article-evidence-boundary">
            <p className="section-kicker">Evidence boundary</p>
            <h2>What this article does—and does not—claim</h2>
            <p>This blueprint is derived from my public SAP CAP and Fiori reference application. The repository implements the CAP event boundary, role checks, concurrent stock protection, resilient OData consumption, automated tests, and CI. The durable outbox, Integration Suite tenant, and S/4HANA receiver are an explicitly proposed design exercise, not a claim of production CPI ownership.</p>
            <div>
              <a className="button button--primary" href={adrUrl} target="_blank" rel="noreferrer">Read the source ADR <span aria-hidden="true">↗</span></a>
              <a className="text-link" href={evidenceUrl} target="_blank" rel="noreferrer">Inspect the repository <span aria-hidden="true">↗</span></a>
            </div>
          </aside>
        </article>
      </div>
    </main>

    <footer className="article-footer">
      <div><p className="section-kicker">Author</p><strong>Billy Martínez</strong><span>Software Engineer · Backend, Cloud & Full-Stack</span></div>
      <nav aria-label="Author links"><a href="mailto:hello@billyflin.dev">Email</a><a href="https://github.com/Billyflin" target="_blank" rel="me noreferrer">GitHub</a><a href="https://www.linkedin.com/in/billyflin" target="_blank" rel="me noreferrer">LinkedIn</a></nav>
    </footer>
  </>;
}
