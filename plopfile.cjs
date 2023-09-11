module.exports = function (plop) {
  plop.setGenerator("page", {
    description: "ページのテンプレートを作成します",
    prompts: [
      {
        type: "input",
        name: "directory",
        message: "ページのディレクトリを入力してください",
      }
    ],
    actions: function (data) {
      const componentDirectory = data.directory;

      //pathの設定は適宜変更すること
      const componentPath = `src/${componentDirectory}/`;
      return [
        {
          type: "add",
          path: componentPath + "index.ejs",
          templateFile: ".plop/page.ejs.hbs",
        }
      ];
    },
  });
};

