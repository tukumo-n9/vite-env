export default function (plop) {
  plop.setGenerator("page", {
    description: "ページのテンプレートを作成します",
    prompts: [
      {
        type: "input",
        name: "directory",
        message: "ページのディレクトリを入力してください",
      },
      {
        type: "input",
        name: "slug",
        message: "ページのスラッグを入力してください",
      },
      {
        type: "input",
        name: "pageClass",
        message: "bodyタグにつけるClass名を入力してください",
      },
      {
        type: "input",
        name: "title",
        message: "ページのタイトルを入力してください（スキップできます）",
      },
      {
        type: "input",
        name: "description",
        message: "ページの説明を入力してください（スキップできます）",
      },
    ],
    actions: function (data) {
      const pagePath = `src/{{directory}}/`;
      const scssPath = `src/scss/project/`;
      const jsPath = `src/js/pages/`;

      return [
        {
          type: "add",
          path: pagePath + "index.ejs",
          templateFile: ".plop/page.ejs.hbs",
        },
        {
          type: "add",
          path: scssPath + "_p-{{slug}}.scss",
          templateFile: ".plop/style.scss.hbs",
        },
        {
          type: "add",
          path: jsPath + "{{slug}}.js",
          templateFile: ".plop/script.js.hbs",
        },
        {
          type: 'append',
          path: 'src/js/main.js',
          pattern: /(\/\/ IMPORT)/g,
          template: "import { {{slug}} as page{{pascalCase slug}} } from './pages/{{slug}}.js';",
        },
        {
          type: 'append',
          path: 'src/js/main.js',
          pattern: /(\/\/ USE)/g,
          template: "  if(pageClass.contains('{{pageClass}}')) page{{pascalCase slug}}();",
        }
      ];
    },
  });
};

