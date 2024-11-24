const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlLoader = require('html-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',


module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'], 
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader', 
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      inject: 'body',
    }),

    // new HtmlInlineScriptPlugin(),
  ],
};