import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map', // determines what level of output to be contained in transpiled files
  noInfo: false, // whether or not to display files transpiled in the command line window
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'), // this is actually just creating files in memory, which is why the output path is 'src'
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html', inject: true })
  ],
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel']
      },
      {
          test: /\.css$/,
          loaders: ['style','css']
      }
    ]
  }
}
