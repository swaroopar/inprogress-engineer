# Rules

Any change must come via PR and the PR must not be approved by an agent.
You must only inform the user that the PR is opened.

## Rules for opening any PR

1. `task build` must execute successfully.
2. If `taskfile` isn't installed it. You must install it.
3. All PRs MUST be rebased and merged.
   This option must be used in GitHub to merge PRs.
4. For any of the tasks, don't install any additional NPM packages at project or global level.
   If even needed, do it in a temporary location only.
5. Don't install any additional binaries or libraries on the system.

## Dependency upgrade PRs

1. Every dependency upgrade change must have the `npx --yes package-lock-utd@1.1.3`
   executed successfully.
