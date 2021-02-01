const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // publicPath: 'http://some-cdn.com/',
    publicPath: 'dist/',
  },
  mode: 'none',
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // loading scss with js file
      {
        test: /\.scss$/,
        // it goes from the end of the array
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
    ],
  },
  plugins: [new TerserPlugin()],
};
