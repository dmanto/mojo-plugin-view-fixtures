[![](https://github.com/dmanto/mojo-plugin-view-fixtures/workflows/Linux/badge.svg)](https://github.com/dmanto/mojo-plugin-view-fixtures/actions)
[![](https://github.com/dmanto/mojo-plugin-view-fixtures/workflows/macOS/badge.svg)](https://github.com/dmanto/mojo-plugin-view-fixtures/actions)
[![](https://github.com/dmanto/mojo-plugin-view-fixtures/workflows/Windows/badge.svg)](https://github.com/dmanto/mojo-plugin-view-fixtures/actions)
[![Coverage Status](https://coveralls.io/repos/github/dmanto/mojo-plugin-view-fixtures/badge.svg?branch=main)](https://coveralls.io/github/dmanto/mojo-plugin-view-fixtures?branch=main)
[![npm](https://img.shields.io/npm/v/mojo-plugin-view-fixtures.svg)](https://www.npmjs.com/package/mojo-plugin-view-fixtures)


A mojo.js plugin that helps on preparing test fixtures for views. Written in TypeScript.
**EXPERIMENTAL**

# Description
The plugin adds a GET route to your application (when not in production mode).


That route (defaults to '/--') will allow you to preset stash variables, modify session values, perform side-effects like loading database fixtures, and finally choose the view to render without going through your controller logic.

## Example

```javascript
import mojo from '@mojojs/core';
import viewFixturesPlugin from 'mojo-plugin-view-fixtures';

const app = mojo();
app.plugin(viewFixturesPlugin);

app.get('/', async ctx => {
});
app.start();
```

## Installation

All you need is Node.js 16.0.0 (or newer).

```
$ npm install mojo-plugin-view-fixtures
```
