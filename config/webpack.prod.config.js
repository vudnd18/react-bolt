/* eslint-disable */
const path = require("path");
const merge = require('webpack-merge');
const webpack = require('webpack');
// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
// Configs
const baseConfig = require('./webpack.base.config');
const dotenv = require('dotenv');
const BrotliPlugin = require('brotli-webpack-plugin');

const prodConfiguration = () => {
  const env = dotenv.config().parsed;
  const { PLATFORM } = env;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return merge([
    {
      // output: {
      //   filename: '[name].bundle.js',
      //   path: path.resolve(__dirname, '../dist'),
      //   publicPath: 'dist'
      // },
      optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin(),
        new Visualizer({ filename: './statistics.html' }),
        new webpack.DefinePlugin(envKeys),
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
        }),
      ],
    },
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
};
