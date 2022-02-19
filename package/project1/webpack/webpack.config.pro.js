const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //打包压缩css
const CopyWebpackPlugin = require('copy-webpack-plugin'); //拷贝资源文件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base.js');
const config = {
  //开启调试
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 5,
          },
          compress: {
            ecma: 5,
            comparisons: false,
            inline: 2,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log'],
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
    ],
  },
  plugins: [
    // 编译环境变量
    // new webpack.DefinePlugin(GLOBALS),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional eea1d28b685828b67788
      filename: "css/[name].css?v=[chunkhash]",
      chunkFilename: "css/vendor.css?v=[chunkhash]"
    }),
    new CleanWebpackPlugin()
  ],
  externals: ['react', 'react-dom']
};
// @ts-ignore
module.exports = merge(base, config);
