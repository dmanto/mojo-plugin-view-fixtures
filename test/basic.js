import viewFixturesPlugin from '../lib/view-fixtures.js';
import mojo from '@mojojs/core';
import t from 'tap';

t.test('viewFixturesPlugin', async t => {
  const app = mojo({mode: 'testing'});
  app.plugin(viewFixturesPlugin, {route: '--', baseDir: 'test/support'});

  t.equal(1, 1, 'no tests yet');
});
