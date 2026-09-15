<div align="center">

# Easy Next.js Web Starter

**A production-capable Next.js foundation for public web products, SaaS applications, portals, and SEO-sensitive experiences.**

[![Use this template](https://img.shields.io/badge/use%20this%20template-2EA44F?logo=github&logoColor=white)](https://github.com/FonijBuild/easy-nextjs-web-starter/generate)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)
![Status: Foundation](https://img.shields.io/badge/status-foundation-F59E0B)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)

[Documentation](https://github.com/FonijBuild/fonij-docs) · [Discussions](https://github.com/orgs/FonijBuild/discussions) · [Issues](https://github.com/FonijBuild/easy-nextjs-web-starter/issues)

</div>

> “What do we build for, if not to lessen each other’s hardship?”

> [!IMPORTANT]
> This repository is currently in the **foundation stage**. Do not treat it as production-ready until the first stable release.

## Best for

- Public web applications and SaaS products
- Marketing, content, and SEO-sensitive pages
- Customer portals and authenticated web experiences
- Products that benefit from Next.js server capabilities

**Not for:** Pure client-side dashboards better served by the Vite SPA foundation, or domain-heavy multi-client backends that need a dedicated API.

## Baseline

- App Router and TypeScript
- Semantic styling and reusable UI foundations
- Environment, API, error, and loading boundaries
- Testing, accessibility, CI, and deployment-ready conventions
- AI-agent rules, specs, and architecture documentation

## Quick start

Preferred:

```bash
fonij create my-product
```

Direct template use:

```bash
gh repo create my-product --template FonijBuild/easy-nextjs-web-starter --private --clone
cd my-product
cp .env.example .env.local
pnpm install
pnpm dev
```

## Project contract

- `.fonij/starter.json` describes this foundation to Fonij.
- `AGENTS.md` defines repository rules for AI coding agents.
- `specs/` contains implementation-ready feature specifications.
- `docs/` contains architecture and repository-specific guidance.
- Keep quality checks green before merging changes.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before contributing. Security issues must follow [`SECURITY.md`](SECURITY.md).
