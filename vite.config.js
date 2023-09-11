import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';
import { ViteEjsPlugin } from "vite-plugin-ejs";
import liveReload from 'vite-plugin-live-reload';
import siteSetting from './siteSetting.json';
import sassGlobImports from 'vite-plugin-sass-glob-import';

// HTMLの複数出力を自動化する
//./src配下のファイル一式を取得
const files = [];
function readDirectory(dirPath) {
	const items = fs.readdirSync(dirPath);

	for (const item of items) {
		const itemPath = path.join(dirPath, item);

		if (fs.statSync(itemPath).isDirectory()) {
			// componentsディレクトリを除外する
			if (item === 'includes') {
				continue;
			}

			// storiesディレクトリを除外する
			if (item === 'stories') {
				continue;
			}

			readDirectory(itemPath);
		} else {
			// htmlファイル以外を除外する
			if (path.extname(itemPath) !== '.html') {
				continue;
			}

			// nameを決定する
			let name;
			if (dirPath === path.resolve(__dirname, 'src')) {
				name = path.parse(itemPath).name;
			} else {
				const relativePath = path.relative(path.resolve(__dirname, 'src'), dirPath);
				const dirName = relativePath.replace(/\//g, '_');
				name = `${dirName}_${path.parse(itemPath).name}`;
			}

			// pathを決定する
			const relativePath = path.relative(path.resolve(__dirname, 'src'), itemPath);
			const filePath = `/${relativePath}`;

			files.push({ name, path: filePath });
		}
	}
}
readDirectory(path.resolve(__dirname, 'src'));
const inputFiles = {};
for (let i = 0; i < files.length; i++) {
	const file = files[i];
	inputFiles[file.name] = resolve(__dirname, './src' + file.path );
}
/*
	この形を自動的に作る
	input:{
		index: resolve(__dirname, './src/index.html'),
		list: resolve(__dirname, './src/list.html')
	}
*/

//CSSとJSファイルに更新パラメータを追加
const chacheBustingCssJs = () => {
	return {
		name: 'html-transform',
		transformIndexHtml(html) {
			//更新パラメータ作成
			const date = new Date();
			const param = `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
			let setParamHtml = html.replace(/\.css/, '.css?' + param).replace(/\.js/, '.js?' + param);
			return setParamHtml;
		}
	}
}

export default ({ mode }) => {
	return defineConfig({
		root: './src', //開発ディレクトリ設定
		server: {
			host: true,
		},
		css: {
			devSourcemap: true, //開発時のCSSソースマップを有効にする
		},
		build: {
			outDir: '../dist', //出力場所の指定
			emptyOutDir: true, //出力先のディレクトリを毎回空にする
			rollupOptions: { //ファイル出力設定
				output: {
					assetFileNames: (assetInfo) => {
						let extType = assetInfo.name.split('.')[1];
						//Webフォントファイルの振り分け
						if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
							extType = 'fonts';
						}
						if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
							extType = 'images';
						}
						//ビルド時のCSS名を明記してコントロールする
						if(extType === 'css') {
							return `assets/css/style.css`;
						}
						return `assets/${extType}/[name][extname]`;
					},
					chunkFileNames: 'assets/js/[name].js',
					entryFileNames: 'assets/js/[name].js',
				},
				input: inputFiles,
			},
		},
		plugins: [
			liveReload(['includes/**/*.ejs']),
			ViteEjsPlugin({siteSetting, mode}),
			sassGlobImports(),
			{
				...chacheBustingCssJs(),
				apply: 'build',
			},
		],
	});
}