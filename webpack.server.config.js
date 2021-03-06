var path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

var config = {
  target: 'node',
  externals: [nodeExternals()],

  entry: {
    server_bgio: path.resolve(__dirname, 'server/bgio.ts'),
    server_web: path.resolve(__dirname, 'server/web.ts'),
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'server/dist'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },

  optimization: {
    minimize: false,
  },

  plugins: [new CleanWebpackPlugin(), new HardSourceWebpackPlugin()],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '*'],
    modules: ['node_modules', 'src'],
    plugins: [new TSConfigPathsPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: true,
                    },
                  },
                ],
              ],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.server.json',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|webp|svg|mp3|wav)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'null-loader',
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      },
    ],
  },
};

module.exports = config;
