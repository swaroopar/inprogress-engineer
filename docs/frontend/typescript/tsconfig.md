# tsconfig Parameters

1. **noEmit** - tsc compiler won't emit the JS files. Will only do the type checks and exit.
2. **isolatedModules** - This is necessary to support TS transpilers such as Babel
   which work on one file at a time. Without this, the transpilers won't export
   certain code to JS and it could then only be found during runtime.
3. **module** - This defines the format of the TypeScript compiler's output. This depends on who is **hosting** the application.
   If the application is for NodeJS, then it must be any NodeJS dependent setting such as nodenext, etc..
   If the application is for browser, then it must be any ES Module based setting such as esnext, es2022, etc.
