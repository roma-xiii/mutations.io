import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper('fileSuffix', (scope: string) => {
    switch (scope) {
      case 'blocks':
        return 'block';
      case 'bricks':
        return 'brick';
      case 'compositions':
        return 'composition';
      case 'layouts':
        return 'layout';
      case 'icons':
        return 'icon';
      default:
        return 'brick';
    }
  });

  plop.setHelper('componentSuffix', (scope: string) => {
    switch (scope) {
      case 'blocks':
        return 'Block';
      case 'bricks':
        return 'Brick';
      case 'compositions':
        return 'Composition';
      case 'layouts':
        return 'Layout';
      case 'icons':
        return 'Icons';
      default:
        return 'Brick';
    }
  });

  plop.setGenerator('react-component', {
    description: 'Generate a UI React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the UI component',
      },
      {
        type: 'list',
        name: 'scope',
        message: 'Where to create the component?',
        choices: [
          { name: 'Bricks (ui/src/bricks)', value: 'bricks' },
          { name: 'Blocks (ui/src/blocks)', value: 'blocks' },
          { name: 'Compositions (ui/src/compositions)', value: 'compositions' },
          { name: 'Layouts (ui/src/layouts)', value: 'layouts' },
          { name: 'Icons (ui/src/icons)', value: 'icons' },
        ],
        default: 'bricks',
      },
      {
        type: 'confirm',
        name: 'withProps',
        message: 'Create separate props file?',
        default: false,
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{scope}}/{{kebabCase name}}/{{kebabCase name}}.{{fileSuffix scope}}.tsx',
        template: `import React from "react";
{{#if withProps}}
import type { {{pascalCase name}}{{componentSuffix scope}}Props } from "./{{kebabCase name}}.props";
{{/if}}

export const {{pascalCase name}}{{componentSuffix scope}}: React.FC{{#if withProps}}<{{pascalCase name}}{{componentSuffix scope}}Props>{{/if}} = ({
}) => {
  return (
    <div>
      {{pascalCase name}}{{componentSuffix scope}}
    </div>
  );
};
`,
      },
      {
        type: 'add',
        path: 'src/{{scope}}/{{kebabCase name}}/index.ts',
        template: `export { {{pascalCase name}}{{componentSuffix scope}} } from "./{{kebabCase name}}.{{fileSuffix scope}}";`,
      },
      {
        type: 'add',
        path: 'src/{{scope}}/{{kebabCase name}}/{{kebabCase name}}.props.ts',
        skip: function (data): boolean | string | undefined {
          return data.withProps ? undefined : 'Skipping props file';
        },
        template: `export interface {{pascalCase name}}{{componentSuffix scope}}Props {
}
`,
      },
      {
        type: 'add',
        path: 'src/{{scope}}/index.ts',
        skipIfExists: true,
        template: ``,
      },
      {
        type: 'append',
        path: 'src/{{scope}}/index.ts',
        template: `export * from "./{{kebabCase name}}";
`,
      },
    ],
  });
}
