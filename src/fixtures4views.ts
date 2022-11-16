import type {MojoApp} from '@mojojs/core';
import Path from '@mojojs/path';
import yaml from 'js-yaml';

export default function fixtures4ViewsPlugin(app: MojoApp, options: {route?: string; baseDir?: string}) {
  const route = options.route ?? '--';
  const baseDir = options.baseDir ?? 'test/support/fixtures';
  app.router.get(route, async ctx => {
    ctx.render({text: `I am in the fixtures4views route, baseDir is ${baseDir}`});
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

console.log(example);
console.log(getFixture(example));
