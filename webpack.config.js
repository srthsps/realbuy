const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: {
            loader: 'file-loader'
        }
      },
      {
        test: /\.svg$/,
        use: {
            loader: '@svgr/webpack'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
