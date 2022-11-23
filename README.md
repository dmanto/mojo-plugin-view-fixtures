[![](https://github.com/dmanto/mojo-plugin-yaml-fixtures/workflows/Linux/badge.svg)](https://github.com/dmanto/mojo-plugin-yaml-fixtures/actions)
[![](https://github.com/dmanto/mojo-plugin-yaml-fixtures/workflows/macOS/badge.svg)](https://github.com/dmanto/mojo-plugin-yaml-fixtures/actions)
[![](https://github.com/dmanto/mojo-plugin-yaml-fixtures/workflows/Windows/badge.svg)](https://github.com/dmanto/mojo-plugin-yaml-fixtures/actions)
[![Coverage Status](https://coveralls.io/repos/github/dmanto/mojo-plugin-yaml-fixtures/badge.svg?branch=main)](https://coveralls.io/github/dmanto/mojo-plugin-yaml-fixtures?branch=main)
[![npm](https://img.shields.io/npm/v/mojo-plugin-yaml-fixtures.svg)](https://www.npmjs.com/package/mojo-plugin-yaml-fixtures)


A mojo.js plugin that helps on preparing test fixtures.

## Example

```javascript
import mojo from '@mojojs/core';
import yamlFixturesPlugin from 'mojo-plugin-yaml-fixtures';

const app = mojo();
app.plugin(yamlFixturesPlugin);

app.get('/', async ctx => {
});
app.start();
```

## Installation

All you need is Node.js 16.0.0 (or newer).

```
$ npm install mojo-plugin-yaml-fixtures
```
