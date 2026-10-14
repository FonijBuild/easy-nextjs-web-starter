<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

Use Server Components by default.

Add "use client" only when browser APIs,
state, events, or lifecycle behavior require it.

Routes compose features.

Business logic belongs in features.

Reusable generic code belongs in shared.

features may import shared.
shared must not import features.
features must not import app.

Do not introduce global state when URL,
server state, or local state is sufficient.

Use Next.js primitives before third-party abstractions.
