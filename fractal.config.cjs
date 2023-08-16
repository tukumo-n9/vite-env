'use strict';

// fractalインスタンスを作成してエクスポート
const fractal = module.exports = require('@frctl/fractal').create();
// プロジェクト関連のメタデータ設定
fractal.set('project.title', 'Fractal');
fractal.set('project.author', 'BRIDGE');
// コンポーネントの設定
fractal.components.set('path', __dirname + '/fractal/components');
// ドキュメントページの設定
fractal.docs.set('path', __dirname + '/fractal/docs');
// 開発サーバーの設定
fractal.web.set('server.syncOptions', {open: true});