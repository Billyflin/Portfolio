# Security Policy

This repository is the source of [billyflin.dev](https://billyflin.dev), a static portfolio built with Vite and React and deployed to GitHub Pages. It has no backend, user accounts, or stored personal data, but reports about anything that could affect visitors or the site's integrity are welcome.

## Supported versions

Only the current `master` branch, which is what billyflin.dev serves, receives fixes.

## Reporting a vulnerability

Please report privately. Do not open a public issue.

- **Preferred:** [GitHub private vulnerability reporting](https://github.com/Billyflin/Portfolio/security/advisories/new)
- **Email:** [hello@billyflin.dev](mailto:hello@billyflin.dev) with "Security" in the subject

Helpful details: the affected URL or file, steps to reproduce, and the impact you observed.

## What to expect

- Acknowledgement within 3 business days
- An initial assessment within 7 days
- A fix or mitigation as soon as practical, with credit in the fix if you want it

## In scope

- Cross-site scripting or content injection on billyflin.dev
- Malicious or compromised dependencies in the build
- Exposed secrets or credentials in this repository
- Issues in the GitHub Actions deploy workflow

## Out of scope

- Findings that require a compromised device or browser
- Missing security headers that GitHub Pages does not allow configuring
- Rate limiting or denial of service against GitHub Pages
- Reports from automated scanners without a demonstrated impact
