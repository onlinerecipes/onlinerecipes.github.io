const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    'privacy-policy': path.join(__dirname, 'webpack/pages/privacy-policy/privacy-policy.ts'),
    contact: path.join(__dirname, 'webpack/pages/contact/contact.ts'),
    404: path.join(__dirname, 'webpack/pages/404/404.ts'),
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, ''),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-bundle.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy-policy/index.html',
      template: 'webpack/pages/privacy-policy/privacy-policy.html',
      chunks: ['privacy-policy'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact/index.html',
      template: 'webpack/pages/contact/contact.html',
      chunks: ['contact'],
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'webpack/pages/404/404.html',
      chunks: ['404'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./webpack'), path.resolve('./node_modules')],
    extensions: ['.js', '.ts'],
  },
};
