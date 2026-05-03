# Rules

Any change must come via PR and the PR must not be approved by an agent.
You must only inform the user that the PR is opened.

## Rules for opening any PR

1. `task build` must execute successfully.
2. If `taskfile` isn't installed it. You must install it.

## Dependency upgrade PRs

1. Every dependency upgrade change must have the `npx --yes package-lock-utd@1.1.3`
   executed successfully.
