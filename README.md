# Viteテンプレート<!-- omit in toc -->
フロントエンドビルドツール「Vite」(ヴィート)を使ったWebサイト制作環境・テンプレートです。  
このファイルは、説明書になります。

## 説明書の読み方
Command(Ctrl) + k → v でプレビューを開いてください。  
見出しに飛びたい時は、Command(Ctrl) + p → # を入力して、選んでください。

## 目次<!-- omit in toc -->
- [説明書の読み方](#説明書の読み方)
- [使い方](#使い方)
  - [1. 案件フォルダにこのテンプレートをコピー](#1-案件フォルダにこのテンプレートをコピー)
  - [2. `npm install` でパッケージをインストール](#2-npm-install-でパッケージをインストール)
  - [3. 案件ごとの設定を行う](#3-案件ごとの設定を行う)
  - [4. NPMスクリプト `serve` を実行してローカルサーバーを起動](#4-npmスクリプト-serve-を実行してローカルサーバーを起動)
  - [5. NPMスクリプト `build:development` で開発サーバー向けにビルド](#5-npmスクリプト-builddevelopment-で開発サーバー向けにビルド)
  - [6. NPMスクリプト `build:production` で本番サーバー向けにビルド](#6-npmスクリプト-buildproduction-で本番サーバー向けにビルド)
  - [7. NPMスクリプト `plop` でテンプレートから新規ページ用ファイルを作成](#7-npmスクリプト-plop-でテンプレートから新規ページ用ファイルを作成)
  - [8. NPMスクリプト `lint:html` でHTMLのLintを実行](#8-npmスクリプト-linthtml-でhtmlのlintを実行)
  - [9. NPMスクリプト `lint:style` でCSS(SCSS)のLintを実行](#9-npmスクリプト-lintstyle-でcssscssのlintを実行)
  - [10. NPMスクリプト `lint:es` でJavaScriptのLintを実行](#10-npmスクリプト-lintes-でjavascriptのlintを実行)
- [できること](#できること)
- [ディレクトリ構成](#ディレクトリ構成)
- [各種設定](#各種設定)
  - [対応Node.jsバージョン](#対応nodejsバージョン)
- [コーディングルール](#コーディングルール)

## 使い方
1. 案件フォルダにこのテンプレートをコピー
2. `npm install` でパッケージをインストール
3. 案件ごとの設定を行う
4. NPMスクリプト `serve` を実行してローカルサーバーを起動
5. NPMスクリプト `build:development` で開発サーバー向けにビルド
6. NPMスクリプト `build:production` で本番サーバー向けにビルド
7. NPMスクリプト `plop` でテンプレートから新規ページ用ファイルを作成
8. NPMスクリプト `lint:html` でHTMLのLintを実行
9. NPMスクリプト `lint:style` でCSS(SCSS)のLintを実行
10. NPMスクリプト `lint:es` でJavaScriptのLintを実行

### 1. 案件フォルダにこのテンプレートをコピー
案件フォルダにこのテンプレートをコピーしてください。  

### 2. `npm install` でパッケージをインストール
ターミナルを開いて、以下のコマンドを実行してください。
``` bash
$ npm install
```
### 3. 案件ごとの設定を行う
`siteSetting.json`ファイルの記述を、案件ごとに書き換えてください。
### 4. NPMスクリプト `serve` を実行してローカルサーバーを起動
サイドバーの「NPMスクリプト」から、`serve` をすると、ローカルサーバーが起動します。  
エディター上での変更箇所を保存すると、自動でブラウザがリロードされます。  
▶️を押すか、右クリックから実行できます。
### 5. NPMスクリプト `build:development` で開発サーバー向けにビルド
サイドバーの「NPMスクリプト」から、`build:development` を実行すると、`dist`フォルダに開発サーバー向けのファイルが出力されます。  
開発サーバー向けのファイルは、faviconやOGP画像などが相対パスになっています。
▶️を押すか、右クリックから実行できます。
### 6. NPMスクリプト `build:production` で本番サーバー向けにビルド
サイドバーの「NPMスクリプト」から、`build:production` を実行すると、`dist`フォルダに本番サーバー向けのファイルが出力されます。  
本番サーバー向けのファイルは、faviconやOGP画像などが絶対パスになっています。
▶️を押すか、右クリックから実行できます。
### 7. NPMスクリプト `plop` でテンプレートから新規ページ用ファイルを作成
サイドバーの「NPMスクリプト」から、`plop` を実行すると、テンプレートから新規ページ用ファイルを作成できます。  
作成されるのは、以下のファイルです。
- ページ名/index.html
- p-ページ名.scss
- ページ名.js
ターミナルから、ページ名やページにつけるクラス名を入力できます。  
▶️を押すか、右クリックから実行できます。
### 8. NPMスクリプト `lint:html` でHTMLのLintを実行
サイドバーの「NPMスクリプト」から、`lint:html` を実行すると、`Markuplint`を使ったHTMLのLint(静的解析：あらかじめ決められたルールに従っているかソースコードをチェックする機能)を実行できます。  
▶️を押すか、右クリックから実行できます。  
設定ファイルは、`.markuplintrc.json`です。  
設定ファイルの詳細は、[Markuplintの公式サイト](https://markuplint.dev/ja/)を参照してください。
### 9. NPMスクリプト `lint:style` でCSS(SCSS)のLintを実行
サイドバーの「NPMスクリプト」から、`lint:style` を実行すると、`stylelint`を使ったCSS(SCSS)のLintを実行できます。  
▶️を押すか、右クリックから実行できます。  
設定ファイルは、`.stylelintrc.json`です。
### 10. NPMスクリプト `lint:es` でJavaScriptのLintを実行
サイドバーの「NPMスクリプト」から、`lint:es` を実行すると、`ESLint`を使ったJavaScriptのLintを実行できます。  
▶️を押すか、右クリックから実行できます。  
設定ファイルは、`.eslintrc.json`です。

## できること
- ディレクトリ構造を保ったまま、HTMLファイルを出力
- SCSSを使ったCSSのコンパイル
- JavaScriptのバンドル
- ローカルサーバーの起動
- テンプレートから新規ページ用ファイルを作成
- HTMLのLint
- CSS(SCSS)のLint
- JavaScriptのLint

## ディレクトリ構成
``` bash
|-- .plop #plopのテンプレートファイル
|-- .vscode #VSCodeの設定ファイル
|-- dist #納品ディレクトリ
|-- node_modules #npmインストールしたパッケージの管理ディレクトリ
|-- src
|   |-- components #コンポーネント見本ページ(build時は出力されない)
|   |   |-- index.html
|   |-- includes
|   |   |-- analytics #GTMなどのタグファイル用のディレクトリ
|   |   |-- components #コンポーネントファイル用のディレクトリ
|   |   |-- layout #各ページで読み込まれるコード上部・下部の共通ファイル用のディレクトリ
|   |-- js #JavaScriptファイル
|   |-- public #静的ファイル(build時にそのままコピーされる)
|   |-- scss #SCSSファイル
|   |-- subpage #下層ページのデモファイル
|   |-- index.html #トップページ
|-- .eslintrc.json #JavaScriptのLint設定ファイル
|-- .gitignore #Gitの管理対象外ファイルを指定するファイル
|-- .jsbeautifyrc.json #HTMLの整形設定ファイル
|-- .markuplintrc.json #HTMLのLint設定ファイル
|-- .stylelintrc.json #CSS(SCSS)のLint設定ファイル
|-- CONTRIBUTING.md #コーディングルール説明ファイル
|-- package-lock.json #npmインストールしたパッケージの管理ファイル
|-- package.json #npmインストールしたパッケージの管理ファイル
|-- plopfile.js #plopの設定ファイル
|-- postcss.config.cjs #PostCSSの設定ファイル
|-- README.md #説明書ファイル
|-- settingSite.json #案件ごとの設定ファイル
|-- vite.config.js #Viteの設定ファイル
```

## 各種設定
### 対応Node.jsバージョン
動作検証済は以下のバージョンです。
- `v18.16.0`

## コーディングルール
コーディングルールについては、[CONTRIBUTING.md](./CONTRIBUTING.md)を参照してください。