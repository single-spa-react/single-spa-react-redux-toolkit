const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  return {
    mode: 'development',
    entry: {
      main: './entry.js'
    },
    output: {
      publicPath: '/',
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: env.production ? 'system': ''
    },
    module: {
      rules: [
        {
          test: /\.(le|c)ss$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        }, {
          test: /\.js$/,
          exclude: [/node_modules/],
          loader: 'babel-loader',
          options: { presets: ['@babel/env','@babel/preset-react'] },
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        template: '/public/index.html',
        filename: 'index.html',
      }),
    ],
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      static: {
        directory: "/public/",
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
      proxy: {
        '/api': 'http://localhost:5000'
      },
      // hotOnly: true,
      hot: true,
      open: true,
    },
    // externals: env.production ? ['react', 'react-dom'] : []
  }
};
