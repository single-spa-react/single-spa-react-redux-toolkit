const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //打包压缩css
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html并注入
const CopyWebpackPlugin = require('copy-webpack-plugin'); //拷贝资源文件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base.js');
const config = {
  //开启调试
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        exclude: /\/excludes/,
        parallel: 4,
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: true,
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: true,
          // Deprecated
          output: null,
          format: null,
          toplevel: false,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: "all",
      minSize: {
        javascript: 30000, // 模块要大于30kb才会进行提取
        style: 50000, // 模块要大于50kb才会进行提取
      },
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      // name: true,
      automaticNameDelimiter: '~', 
      cacheGroups: {
        vendor: {//node_modules内的依赖库
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          minChunks: 1, //被不同entry引用次数(import),1次的话没必要提取
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100,
          reuseExistingChunk: true
          // enforce: true?
        },
        common: {// ‘src/js’ 下的js文件
          chunks: "all",
          test: /[\\/]src[\\/]js[\\/]/,//也可以值文件/[\\/]src[\\/]js[\\/].*\.js/,  
          name: "common", //生成文件名，依据output规则
          minChunks: 1,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1
        }
      }
    }
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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/assets'),
          to: path.resolve(__dirname, '../dist/assets'),
          // ignore: ['.*']
        }
      ]
    }),
    new CleanWebpackPlugin()
  ],
  externals: ['react', 'react-dom']
};
// @ts-ignore
module.exports = merge(base, config);