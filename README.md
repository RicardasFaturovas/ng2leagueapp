# League of legends Angular 2 app

League of legends app under development using typescript and Angular 2.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start-dev` - runs the compiler and a server at the same time, both in "watch mode".
* `npm start` - default script used to run deployed version of the project".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* 
Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)
