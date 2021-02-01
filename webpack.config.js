const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
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
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({ filename: 'style.[contenthash].css' }),
    // adding cleanup for the builder outside of dist
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*'),
      ],
    }),
  ],
};
