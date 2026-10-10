# Instructions for coding agents

<!-- BEGIN VARIS: managed by varis init; edits here are replaced -->
## Varis

This project publishes services that AI agents discover and pay to call,
through Varis. Before you change a service's definition or its handler, read
the Varis SDK's instructions for coding agents:

- TypeScript: `node_modules/@usevaris/sdk/docs/agents.md`

Then run `varis build` and commit the updated `varis.json`. Never edit the
`services` list in `varis.json` by hand; `varis build` owns it. Change
`owner_id`, `base_url`, or `test_base_url` only with `varis init`, and
only when the developer asks. Never put a token or other secret in `varis.json`.
<!-- END VARIS -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
