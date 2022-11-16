[![](https://github.com/dmanto/mojo-plugin-fixtures4views/workflows/Linux/badge.svg)](https://github.com/dmanto/mojo-plugin-fixtures4views/actions)
[![](https://github.com/dmanto/mojo-plugin-fixtures4views/workflows/macOS/badge.svg)](https://github.com/dmanto/mojo-plugin-fixtures4views/actions)
[![](https://github.com/dmanto/mojo-plugin-fixtures4views/workflows/Windows/badge.svg)](https://github.com/dmanto/mojo-plugin-fixtures4views/actions)
[![Coverage Status](https://coveralls.io/repos/github/dmanto/mojo-plugin-fixtures4views/badge.svg?branch=main)](https://coveralls.io/github/dmanto/mojo-plugin-fixtures4views?branch=main)
[![npm](https://img.shields.io/npm/v/mojo-plugin-fixtures4views.svg)](https://www.npmjs.com/package/mojo-plugin-fixtures4views)


A mojo.js plugin that helps on preparing test fixtures.

## Example

```javascript
import mojo from '@mojojs/core';
import fixtures4ViewsPlugin from 'mojo-plugin-fixtures4views';

const app = mojo();
app.plugin(fixtures4ViewsPlugin);

app.get('/', async ctx => {
});
app.start();
```

## Installation

All you need is Node.js 16.0.0 (or newer).

```
$ npm install mojo-plugin-fixtures4views
```
