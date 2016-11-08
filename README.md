**This is the source for the  ES6 features**

### To Run/Develop

**npm global dependencies**
- BrowserSync
- Webpack

```
npm install
npm start
```

This should open your web browser with the BrowserSync server running and watching for changes.

Open up the console in your dev tools!

See `package.json` for `npm start` details.

## ES6 Modules

ES6 (ES2015) introduces a [standardized module format](http://babeljs.io/docs/learn-es2015/#modules) to Javascript. 

Using [Webpack](http://webpack.github.io/) to bundle up our modules and [Babel](http://babeljs.io/) to transpile our ES6 into ES5.

**Some Common Import/Export Variations**
```js
import {someFunction} from 'someModule';

import {someFunction as someAlias} from 'someModule';

import * as someModule from 'someModule';

export function someFunction() {/* */};

function someFunction() {/* */}; export {someFunction};

function someFunction() {/* */}; export {someFunction as someAlias};
```