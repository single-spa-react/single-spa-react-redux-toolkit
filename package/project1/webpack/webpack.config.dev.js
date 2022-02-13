const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html并注入
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base.js');
const config = {
  devtool: 'eval', // 调试工具
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "../public/"),
      staticOptions: {},
      // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
      // Can be:
      // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
      publicPath: "/",
      // Can be:
      // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
      serveIndex: true,
      // Can be:
      // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
      watch: true,
    },
    port: 3005,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000'
    },
    // hotOnly: true,
    hot: true,
    open: true,
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ]
};
// @ts-ignore
module.exports = merge(base, config);