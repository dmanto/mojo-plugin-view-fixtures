import fixtures4ViewsPlugin from '../lib/fixtures4views.js';
import mojo from '@mojojs/core';
import t from 'tap';

t.test('fixtures4viewsPlugin', async t => {
  const app = mojo({mode: 'testing'});
  app.plugin(fixtures4ViewsPlugin, {route: '--', baseDir: 'test/support'});

  t.equal(1, 1, 'no tests yet');
});
