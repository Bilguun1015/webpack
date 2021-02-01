const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    bg: './src/bg.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    // publicPath: 'http://some-cdn.com/',
    publicPath: '',
  },
  mode: 'production',
  module: {
    rules: [
      // {
      //   test: /\.(xml)$/,
      //   use: ['xml-loader'],
      // },
      // loading img with js file
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader'],
      },
      // loading css with js file
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      // using the css file with MiniCss plugin
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // loading scss with js file
      // {
      //   test: /\.scss$/,
      // it goes from the end of the array
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },

      // loading scss with MiniCss plugin
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    // customizing the html
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello world',
      template: 'src/page-template.hbs',
      // filename: 'subfolder/custom_filename.html',
      description: 'hello world',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'bg.html',
      chunks: ['bg'],
      title: 'background',
      template: 'src/page-template.hbs',
      // filename: 'subfolder/custom_filename.html',
      description: 'background image ',
      minify: false,
    }),
  ],
};
