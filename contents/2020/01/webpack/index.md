---
title: 'webpackの使い方'
date: '2020-01-20T09:00:00.000-07:00'
tags:
  - webpack
  - React
keywords:
  - webpack
  - React
slug: webpack
---

## はじめに

🍣🍣🍣
:100:
Reactの開発環境を構築する際 `create-react-app` に頼りきりで、会社のprojectの`webpack.config.js`に何が書いてあるのかわからなかったため、webpackの基本的な使い方を勉強しました。
今後、フロントエンド開発を行っていく上で、避けては通れないwebpackの超超基本的な設定方法について見ていきたいと思います。

## [Webpack](https://webpack.js.org/)とは？
webpackは、**jsファイル**、**画像ファイル**、**スタイルシート**など、様々なファイルを一つにまとめる機能を持ち、その個々のファイル(モジュール)を束ねる（バンドルする）という役割から、モジュールバンドラーと呼ばれています。
webpackを使うメリットは以下の通りです。

```javascript{1, 5-9}:gatsby-config.js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

```js:title=/src/pages/index.js
let hoge = "piyo"
console.log(hoge)
```

```js:title=example-file.js
alert('how cool is this!');
```

```javascript{numberLines: true}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

```javascript{numberLines: 5}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

```jsx
class FlavorForm extends React.Component { // highlight-line
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({value: event.target.value});
  }

  // highlight-start
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  // highlight-end

  render() {
    return (
      { /* highlight-range{1,4-9,12} */ }
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

###  1. ライブラリの依存関係を解消する
下記二つのファイルは、`a.js`から`b.js`を読み込んでいるため、.html内にscriptタグで読み込む際、`b.js`->`a.js`の順番で読み込まなければ、存在しないファイルを参照しようとしてエラーとなります。

```js:a.js
import name from './b.js';
console.log(name);
```

```js:b.js
const name = 'dog';
export default name;
```

```html
<script src="a.js"></script>
<script src="b.js"></script>
<!-- a.js内でb.jsが読み込めないためエラーとなる -->
```

このような依存関係を自動で解決してくれます。

### 2. リクエストの回数が減る
複数ファイルを一つにまとめられるので、リクエスト回数が減るのはイメージしやすいと思います。

### 3. 大規模な開発に向いている
最終的に一つのファイルにまとめられるので、クラスや関数など、細かい単位でのファイル分け（モジュール化）を前提とした開発が出来るため、コードの見通しがよくなるのと、名前の競合防止の役割を果たします。

## ローダー
ローダーは様々な種類のものがあり、webpackを利用する上で、非常に重要な役割を果たします。
モジュールはJavascriptの概念ですが、ローダーを使用することで `.css` `.png` などのファイルもバンドルしてひとつにまとめることが出来ます。

![webpack.png](https://qiita-image-store.s3.amazonaws.com/0/268219/ce72a042-a9e8-3cfb-2bd9-9319dbfd00f6.png)

## 今回使用するローダー
### css-loader
cssファイルを読み込むためのローダー
### style-loader
読み込んだcssのスタイルを**style**要素としてページに反映させるローダー
### url-loader
画像ファイルを**DataURL**化して.jsファイルとして読み込むためのローダー
### file-loader
画像をファイルとして出力し、パスを管理するためのローダー
url-loaderでJavascript化された画像データは**オリジナルよりサイズが大きくなる**ため、一定のファイルサイズ以上は、Javascript化せずにファイルとして出力する、というような使い方をします。
url-loaderは、ファイルサイズが小さく個数の多い画像ファイルをバンドルする時に効果を発揮します。
###  babel-loader
モジュールをまとめる前に、babelによるトランスパイルを挟むためのローダー
*トランスパイルとは...新しいJavaScriptの記法に対応していないブラウザでは動作しないため、動作が確実な古いJavascriptの記法に変換すること。また、reactで一般的に使われるJSXという記法も、babelによって通常のJavaScript記法に変換することで、ブラウザで動作するようにします。

## プラグイン
Webpackの機能を拡張するためのライブラリが多数提供されています。プラグインを利用することで、バンドルファイルから共通のモジュールを切り出したり、バンドルファイルを読み込むためのhtmlファイルを自動生成したり、バンドルされたcssを別ファイルとして出力したりといったことが出来ます。
今回使うもの下記の一つだけです。

### extract-text-webpack-plugin
cssファイルをバンドルしたファイルとは別のスタイルシートとして出力するプラグイン

## 簡単にまとめると
- webpackは複数のファイルをまとめるモジュールバンドラーとしての機能が主な役割
- ファイルをまとめる時に、`.js`意外のものを読み込めるようにするローダー
- その他、プラグインによって機能を拡張出来る

## 実践

それでは、webpackを使ってReactのコードを動かし、Hello worldを出力するまでを行っていきます。

まず、今回のプロジェクトディレクトリを作成します。

```command
mkdir hello-webpack
cd hello-webpack/
```

続いて、package.jsonを作成します。package.jsonやinstallコマンドについての説明は省略します。

```command
npm init

// 問いかけが終わるまでエンターを押します。
// すると、下記のようなpackage.jsonファイルが作成されます。

{
  "name": "hello-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

必要なnpmモジュールをinstallします。

```
npm install -S react react-dom
// reactに必要なモジュール
```

```
npm install -D webpack webpack-cli
// webpack本体と、webpackコマンドを使えるようにするためのもの
```
* `-S`オプションは`--save`の省略形
* `-D`オプションは`--save-dev`の省略形

次に、必要なローダー類をインストールします。

```
npm install -D css-loader style-loader url-loader file-loader
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react
```
babelとつくものが沢山出てきて混乱すると思うので説明していきます。
`babel-loader` はbabelをローダーとして使用するためのもの
`@babel/core` はbabel本体
`@babel/preset-***`とは...?
babelでトランスパイル（JS -> JSの変換）をする時に使用するもので、`@babel/preset-***` のような名前で***にpresetの種類が入ります。Reactプロジェクトの場合は、`@babel/preset-react`　により、JSXで書かれているものをJavaScriptに変換し、次に`@babel/preset-env`で古いJavaScriptに変換の順で行いブラウザで動作するようにします。

必要なディレクトリ、ファイルを作成します。

```
mkdir -p public/ src/images
touch public/index.html src/index.js src/style.css src/hello.js
touch webpack.config.js .babelrc
```

imagesの中に`png` `jpg` どちらかの拡張子の画像ファイルを入れてください

```
hello-webpack/
├── node_modules/
├── package-lock.json
├── package.json
├── public            // バンドルしたファイルをここに吐き出す
│   └── index.html    // webpackでバンドルしたjsファイルをindex.htmlで読み込む
├── src               // バンドルする前のソースコードをここへ
│   ├── index.js      // 起点となるファイル
│   ├── Hello.js      // Helloと画像を表示するコンポーネント
│   ├── style.css
│   └── images
│        └── dog.png  // 好きな画像を入れてくだい
├── .babelrc          // babelの設定ファイル
└── webpack.config.js // webpackの設定ファイル
```

```html:index.html
<!DOCTYPE html>
<html lang="ja">
<head>
  <title>Hello Webpack</title>
</head>
<body>
  <!-- id rootの要素にReactでレンダリングする -->
  <div id="root"></div>
  <!-- webpackによりbundle.jsというファイル名でまとめたものを読み込む -->
  <script src="bundle.js"></script>
</body>
</html>
```

```js:index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
```

```js:Hello.js
import React from 'react';
import './style.css';
import dog from './images/dog.png'; // 自分で入れた画像のファイル名、下のimgタグのｓｒｃ要素で読み込む

export default () => (
  <div>
    <div className="hello">Hello Webpack!</div>
    <img src={dog} />
  </div>
);
```

```js:webpack.config.js
const path = require('path'); // パスを指定するためにnode標準で搭載されるpathを読み込む

module.exports = {
  mode: 'development',
　　　　devtool: 'eval-source-map',
  entry: path.join(__dirname, '/src'),　
  output: {
    path: path.join(__dirname, '/public'), // バンドルしたファイルの吐き出し先を設定
    filename: 'bundle.js' // ファイルの名前を指定
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200, // url-loaderを使うサイズの上限を指定
              name: './images/[name].[ext]'
              // limit以上のサイズの時、どこになんて名前で画像を吐き出すのかを設定。
              // [name].[ext]は、もとの画像nameと拡張子で吐き出す。
            }
          }
        ]
      },
    ]
  }
}
```
## webpackの設定ファイル、webpack.config.jsの内容

### `path`
Node.jsの標準モジュール

```
path.join(__dirname, '/src')
// joinは引数のパスを連結させる。__dirnameはカレントのディレクトリのパスが出力される。
```
### `mode`
  - **production** -> バンドルしたファイルが、空白/改行が除去されファイルが最小化される。
  - **development** ->コード判読がしやすいように、空白/改行を除去せずオリジナルのコードを維持する。

### `devtool`
ソースマップの種類を指定。開発時には、限りなくオリジナルのソースコードを得られる**eval-source-map**がおすすめ。詳しい種類については下記を参照。
https://webpack.js.org/configuration/devtool/

### `entry`
起点となるjsファイルを指定。**/src**のようにディレクトリを指定すると、そのディレクトリ配下のindex.jsがデフォルトで読まれる。

### `output`
- path -> 吐き出す先のディレクトリを指定。
- filename -> 吐き出すファイルの名前を指定。

### `module/rules`
- test => 読み込む拡張子
- use => 利用するローダー、配列で後ろのものから適用される。
- exclude => 除外するディレクトリやファイル


loaderにbabelを使用しているため、babelの設定を記述する必要があります。`webpack.config.js`にまとめて書くことも出来ますが、今回は`.bebelrc` ファイルに切り出しています。こうすることで、`webpack.config.js`でbabel-loaderが使用されている時に、babelの設定は`.babelrc`のものが適用されます。

```　.babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```


"presets"には配列を渡します。envはmodulesオプションを設定するために配列になっています。
*presetは実行される際に後ろに記述したものから適用されます。上記のように記述することで、presetのreact -> envの順で解釈されます。


続いて、webpackを実行するコマンドをpackage.jsonに追加します。

```json:package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js"
  },
```
--configオプションはデフォルトでwebpack.config.jsを参照。説明のために指定。

それでは、一通りの設定が終わったので、webpackを実行してみましょう

```
npm run build

> webpack --config webpack.config.js

Hash: f67d3e2ea3f0dc087604
Version: webpack 4.27.1
Time: 1050ms
Built at: 2018-12-11 13:23:45
    Asset      Size  Chunks             Chunk Names
bundle.js  2.11 MiB    main  [emitted]  main
Entrypoint main = bundle.js
[./node_modules/css-loader/dist/cjs.js!./src/style.css] 185 bytes {main} [built]
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [built]
[./src/Hello.js] 318 bytes {main} [built]
[./src/images/dog.png] 7.9 KiB {main} [built]
[./src/index.js] 174 bytes {main} [built]
[./src/style.css] 1.06 KiB {main} [built]
    + 14 hidden modules
```

output先に指定したpublic/ディレクトリをみてみると

```
public
├── bundle.js
└── index.html
```
無事にbundle.jsとしてファイルが吐き出されています。
index.htmlを開いてみると
<img width="826" alt="スクリーンショット 2018-12-11 12.42.25.png" src="https://qiita-image-store.s3.amazonaws.com/0/268219/aaddca73-ea58-963b-c003-30f2269416c6.png">
無事に表示出来ていることが確認できました！

### CSSファイルを別で吐き出すプラグインを設定してみる

今のままだと、cssファイルに使用しているのは　`[style-loader, css-loader]`　なので、cssファイルが読み込まれた後、style要素として挿入されています

<img width="817" alt="スクリーンショット 2018-12-11 13.28.39.png" src="https://qiita-image-store.s3.amazonaws.com/0/268219/b918e82a-bbef-cfc0-c729-d2fcb49c3cdd.png">

これを埋め込みではなく.cssファイルとして出力してみましょう。

必要なプラグインをインストール

```
npm install -D extract-text-webpack-plugin@next
```

下記を変更

```js:webpack.config.js

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 追加

module.exports = {
  mode: 'development',
　devtool: 'eval-source-map',
  entry: path.join(__dirname, '/src'),　
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,                   // 変更
        use: ExtractTextPlugin.extract({  // 読み込んだプラグインを適用させる。
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: './images/[name].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [                            // プラグインを追加
    new ExtractTextPlugin('style.css')  // 引数に出力する名前を渡す
  ]
}
```

```html:index.html
<!DOCTYPE html>
<html lang="ja">
<head>
  <!-- 出力されたstyle.cssを読み込む -->
  <link rel="stylesheet" href="style.css">
  <title>Hello Webpack</title>
</head>
<body>
  <div id="root"></div>
  <script src="bundle.js"></script>
</body>
</html>
```

もう一度webpackを実行してみます。

```
npm run build

// 無事style.cssとしてスタイルシートが出力されている
public/
├── bundle.js
├── index.html
└── style.css
```

以上がwebpackでReactを動かす基本的な設定となります。

## 開発用サーバーを立てるwebpack-dev-server

このままでは、ファイルを変更するたびにbuildコマンドを実行しなければならずとても面倒です。webpack-dev-serverを使うことで、webpackと連動しファイル変更時に自動で再ビルドされ、ブラウザー更新までしてくれます。

```command
npm install -D webpack-dev-server
```

```js:package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js",
    "start": "webpack-dev-server --open" // この行を追加
  }
```
* --openはコマンド実行時に自動でブラウザで開いてくれるオプション

```js:webpack.config.js
module.exports = {
  // ... 省略
  entry: path.join(__dirname, '/src'),　
  output: {
   // ...　省略
  },
  devServer: { // webpack-dev-serverの設定を追加
    contentBase: path.join(__dirname, '/public'), // 監視するディレクトリを指定
    port: 8084  // 立ち上げるポートを指定
  },
  module: {
    // ...省略
  }
}
```

設定が終わったので実際に立ち上げてみましょう。

```
npm start
```
すると、自動的にブラウザが立ち上がって、ビルドした状態のページが表示されます。なお、ビルド結果のファイルはメモリに保存されているだけなので、実際には出力されません。
webpack-dev-serverでサーバが立ち上がった状態で、src/内のファイルの変更をかけてみてください。自動で変更が検知されてブラウザに反映されたと思います。

