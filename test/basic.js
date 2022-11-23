import yamlFixturesPlugin from '../lib/yaml-fixtures.js';
import mojo from '@mojojs/core';
import t from 'tap';

t.test('yamlFixturesPlugin', async t => {
  const app = mojo({mode: 'testing'});
  app.plugin(yamlFixturesPlugin, {route: '--', baseDir: 'test/support'});

  t.equal(1, 1, 'no tests yet');
});
