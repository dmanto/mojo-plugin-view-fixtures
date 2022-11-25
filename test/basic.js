import viewFixturesPlugin from '../lib/view-fixtures.js';
import mojo from '@mojojs/core';
import Path from '@mojojs/path';
import t from 'tap';

t.test('viewFixturesPlugin', async t => {
  const app = mojo({ mode: 'testing' });
  app.plugin(viewFixturesPlugin, { route: '--', baseDir: 'test/support' });

  app.renderer.viewPaths.push(Path.currentFile().sibling('support', 'views').toString());
  app.get('/', async ctx => {
    await ctx.render({ view: 'test' }, { name: 'World' });
  });

  const ua = await app.newTestUserAgent({ tap: t });
  await t.test('Normal view access', async () => {
    (await ua.getOk('/')).statusIs(200).bodyLike(/Hello World/);
  });
  await t.test('Initialize stash variables', async () => {
    (await ua.getOk('/--?x.name=Daniel&v=test')).statusIs(200).bodyLike(/Hello Daniel/);
  });
  await t.test('No shortcuts in stash, view, deeper views directory', async () => {
    (await ua.getOk('/--?stash.name=Daniel&view=aux/aux-test')).statusIs(200).bodyLike(/Hello Daniel/);
  });
  await ua.stop();
});
