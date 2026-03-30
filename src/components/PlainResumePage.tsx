const skills = [
  'SAP',
  'SAP CAP',
  'CDS',
  'SAP Fiori',
  'React',
  'TypeScript',
  'Google Cloud',
  'AWS',
  'Automation',
  'Mistral',
  'Seeeduino XIAO C6',
];

const experience = [
  {
    title: 'BeCloud',
    body:
      'Trabajo ligado a soluciones SAP, arquitectura, despliegues distribuidos, CAP con CDS, SAP Fiori y decisiones de plataforma.',
  },
  {
    title: 'Clinipets',
    body:
      'Sistema veterinario con agenda, fichas, stock e insumos, WhatsApp para recordatorios, OTP, Google Cloud e IA autohosteada con Mistral.',
  },
  {
    title: 'Hardware y automatización',
    body:
      'Exploración personal con Seeeduino XIAO C6, sensores, partículas de aire, regadores automáticos, presencia y cámaras WiFi.',
  },
];

const credentials = [
  'AWS Cloud Technology Consultant',
  'AWS Cloud Solutions Architect',
  'Google Advanced Data Analytics',
  'Google Data Analytics',
];

export function PlainResumePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-slate-900 md:px-10">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="border-b border-slate-200 pb-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Plain / ATS</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Billy Martínez</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">
            Software, producto y arquitectura. Interés en sistemas reales, interfaces claras,
            automatización e integración entre operación y tecnología.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
            <a href="mailto:billymartinezc@gmail.com" className="underline decoration-slate-300 underline-offset-4">
              billymartinezc@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/billyflin" className="underline decoration-slate-300 underline-offset-4">
              linkedin.com/in/billyflin
            </a>
            <a href="https://github.com/Billyflin" className="underline decoration-slate-300 underline-offset-4">
              github.com/Billyflin
            </a>
            <a href="/Billy_Martinez_CV.pdf" className="underline decoration-slate-300 underline-offset-4">
              CV PDF
            </a>
          </div>
        </header>

        <section>
          <h2 className="text-xl font-semibold">Resumen</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">
            Perfil orientado a software y arquitectura con experiencia en soluciones empresariales,
            integración, cloud, automatización y sistemas construidos para uso real.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Experiencia y sistemas</h2>
          <div className="mt-4 space-y-5">
            {experience.map((item) => (
              <article key={item.title}>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-base leading-7 text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Stack y foco técnico</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">{skills.join(' · ')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Credenciales</h2>
          <ul className="mt-4 space-y-2 text-base leading-7 text-slate-700">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
