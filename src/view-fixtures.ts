import type { MojoApp } from '@mojojs/core';
import Path from '@mojojs/path';
import yaml from 'js-yaml';

export default function viewFixturesPlugin(app: MojoApp, options: { route?: string; baseDir?: string }) {
  const route = options.route ?? '--';
  const baseDir = options.baseDir ?? 'test/support/fixtures';
  let view: string;
  app.router.get(route, async ctx => {
    const param = await ctx.params();
    const session = await ctx.session();
    for (const [name, value] of param.entries()) {
      const stashVar = name.match(/^(?:x|stash)\.(\w+)/);
      const sessionVar = name.match(/^(?:s|session)\.(\w+)/);
      if (stashVar) ctx.stash[stashVar[1]] = value;
      else if (sessionVar) session[sessionVar[1]] = value;
      else if (name.match(/^v(iew)?$/)) view = value;
    }
    ctx.render({ view });
  });
}

export const saveFixture = (input: TemplateStringsArray) => {
  const dir = Path.tempDirSync();
  const file = dir.child('fixture.yml').writeFileSync(input.join());
  console.log(input);
  return file.toString();
};

export const getFixture = (absolute: string) => {
  const content = new Path(absolute).readFileSync('utf8');
  return yaml.load(content as string);
};

const example = saveFixture`
    session:
        - user: alguien
        - role: admin
`;
export const qw = (strings: TemplateStringsArray, ...values: any[]) => {
  return String.raw({ raw: strings }, ...values).match(/\S+/g);
};
console.log(example);
console.log(getFixture(example));
// Following code was used as an example. To be used as inspiration only
// if (app.mode === 'development')
//   app.get('/--', async ctx => {
//     const params = ctx.req.query;
//     const session = await ctx.session();
//     const results: {[key: string]: string} = {};
//     for (const [name, value] of params) {
//       results[name] = value;
//       const sessionMatch = name.match(/^-(\w+)$/);
//       const stashMatch = name.match(/^(\w+)$/);
//       if (stashMatch) {
//         ctx.stash[stashMatch[1]] = value;
//       } else if (sessionMatch) {
//         session[sessionMatch[1]] = value;
//       }
//     }
//     if (results['redirect-to']) return await ctx.redirectTo(results['redirect-to']);
//     if (results.view) return await ctx.render({view: results.view});
//     await ctx.render({json: results});
//   });
