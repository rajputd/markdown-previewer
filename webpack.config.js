const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  resolve: {extensions: ['*', ".js", ".jsx"]},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {presets: ["@babel/env"]}
      },
      {
        test: /\.css/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotonly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
