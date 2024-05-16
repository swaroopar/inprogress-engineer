# Absolute vs Relative Imports

Absolute imports are where the imports start with `@` from the root component
whereas relative imports fetched relatively using the double dot (`..`) character from the filesystem.

Default configuration is the relative import but the absolute import allows better readability.

## Paths Configuration

To achieve absolute imports, the **paths** configuration in the tsconfig.json must be updated.
