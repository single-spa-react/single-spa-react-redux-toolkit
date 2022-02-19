const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin'); //拷贝资源文件
const path = require('path');
const config = {
  resolve: {
    //识别扩展文件名
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    }
  },
  entry: {
    main: path.resolve(__dirname, '../entry.js'),
  },
  output: {
    //输出目录
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    libraryTarget: process.env.NODE_ENV === 'production' ? 'system': ''
  },
  plugins: [
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
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/inline',
        generator: {
          filename: '[name].[ext]'
        }
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 10000,
        //       mimetype: 'image/svg+xml',
        //       name: '[name].[ext]'
        //     }
        //   }
        // ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name].[ext]'
        }
        // use: [
        //   {
        //     // loader: 'file-loader',
        //     type: 'asset/resource',
        //     generator: {
        //       filename: 'assets/[hash][ext][query]'
        //     }
        //     // options: {
        //     //   name: '[name].[ext]'
        //     // }
        //   }
        // ]
      },
      {
        test: /\.css|\.less$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              // minimize: true,
              sourceMap: false
              // importLoaders: 2,
              // modules: true,
              // // namedExport: true, // this is  invalid Options ,I find it
              // camelCase: true,
              // localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          }, {
            loader: 'less-loader',
            options: {
              lessOptions: {
                paths: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
                javascriptEnabled: true,
                sourceMap: false
              }
            }
          }
        ]
      }
    ]
  },
};
module.exports = config;
