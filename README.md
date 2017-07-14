自动加css前缀cli:
npm install --global postcss-cli autoprefixer
postcss *.css --use autoprefixer -d build/

配置完整的webpack:
npm i
配置写入package.json
```
 {
  "name": "mvc-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer-loader": "^3.2.0",
    "babel-loader": "^7.1.1",
    "css-loader": "^0.28.4",
    "file-loader": "^0.11.2",
    "html-webpack-plugin": "^2.29.0",
    "image-webpack-loader": "^3.3.1",
    "less": "^2.7.2",
    "less-loader": "^4.0.4",
    "node-sass": "^4.5.3",
    "open-browser-webpack-plugin": "0.0.5",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.18.2",
    "url-loader": "^0.5.9",
    "webpack": "^3.0.0",
    "webpack-dev-server": "^2.5.1"
  },
  "dependencies": {
    "jquery": "^3.2.1",
    "lodash": "^4.17.4"
  }
}

```
配置webpack.config.js
```
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Webpack-demos',
            filename: 'index.html'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:9000'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    }

}
```
- 执行 npm run watch ，无报错，用file协议start dist/index.html
- 执行 ./node_modules/.bin/webpack-dev-server ，打开http://localhost:9000/，可自动动态更新状态
