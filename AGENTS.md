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
