const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
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
        use: ['style-loader', 'css-loader'],
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
    new CleanWebpackPlugin(),
    // customizing the html
    new HtmlWebpackPlugin({
      title: 'Hello world',
      template: 'src/index.hbs',
      // filename: 'subfolder/custom_filename.html',
      description: 'new description',
    }),
  ],
};
