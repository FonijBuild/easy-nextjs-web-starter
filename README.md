<div align="center">

# Easy Starter Next.js Web App

**A production-capable Next.js foundation for authenticated SaaS products, dashboards, portals, and AI-powered applications.**

[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?logo=github&logoColor=white)](https://github.com/easy-starter/easy-starter-nextjs-web-app/generate) [![CI](https://github.com/easy-starter/easy-starter-nextjs-web-app/actions/workflows/ci.yml/badge.svg)](https://github.com/easy-starter/easy-starter-nextjs-web-app/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) ![Status: foundation](https://img.shields.io/badge/status-foundation-orange) ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)

[فارسی](README.fa.md) · [Documentation](https://github.com/easy-starter/easy-starter-docs) · [Report an issue](https://github.com/easy-starter/easy-starter-nextjs-web-app/issues/new/choose)

</div>

> “What do we build for, if not to lessen each other’s hardship?”

> [!IMPORTANT]
> This repository is currently in the **foundation stage**. Do not treat it as production-ready until the first stable release.

## What it solves

Standardizes the repeated application shell, user flows, quality gates, and integration boundaries needed by modern authenticated web products.

## Use this template for

- SaaS applications
- Client and customer portals
- Dashboards and internal tools
- Membership and subscription products
- AI-enabled web applications

**Not intended for:** Content-only marketing sites or domain-heavy commerce backends.

## Baseline

- Authenticated and public route groups
- Dashboard, onboarding, account, and error-state foundations
- Typed environment and API boundaries
- Testing, accessibility, observability, and CI hooks
- Docker and managed-platform deployment profiles

Detailed architecture, conventions, deployment profiles, and extension guides belong in [`docs/`](docs/). Feature work starts from [`specs/`](specs/), and agent rules live in [`AGENTS.md`](AGENTS.md).

## Quick start

1. Click **Use this template** or run:

   ```bash
   gh repo create my-project --template easy-starter/easy-starter-nextjs-web-app --private --clone
   cd my-project
   ```

2. Set the project name, package metadata, and environment values.
3. Start the project:

   ```bash
   cp .env.example .env.local
   make setup
   make dev
   make check
   ```

4. Write the first feature specification under `specs/`.
5. Implement the feature and keep `make check` green.

## Working agreement

- Read `AGENTS.md` and the relevant specification before changing code.
- Reuse existing patterns before adding abstractions or dependencies.
- Never commit credentials or production data.
- Run the repository quality checks before opening a pull request.
- Record architecture-changing decisions in `docs/decisions/`.

## Documentation

Start with `docs/getting-started.md`. Broader AI-first development guidance is maintained in [Easy Starter Docs](https://github.com/easy-starter/easy-starter-docs).

## Contributing and support

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for contribution rules and [`SUPPORT.md`](SUPPORT.md) for help. Security issues must follow [`SECURITY.md`](SECURITY.md).

## License

Released under the [MIT License](LICENSE).
