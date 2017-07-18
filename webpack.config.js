const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[chunkhash].[name].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: resolve(__dirname, 'build'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
