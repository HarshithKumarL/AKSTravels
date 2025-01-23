const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for the app
  output: {
    filename: "bundle.js", // Output file
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // Ensure routing works correctly
  },
  mode: "development",
  devtool: "inline-source-map", // For better debugging
  devServer: {
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true, // For React routing
    port: 3000,
    hot: true,
    open: true, // Automatically open the browser
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JS/JSX
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/, // Support CSS
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Load images
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allows omitting file extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Base HTML template
    }),
    new CopyPlugin({
      patterns: [{ from: "public/manifest.json", to: "manifest.json" }],
    }),
  ],
};
