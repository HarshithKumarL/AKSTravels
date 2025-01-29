const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js", // Use content hash for caching
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allows omitting file extensions
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans up old build files
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new InjectManifest({
      swSrc: "./src/service-worker.js", // Source of your Service Worker file
      swDest: "service-worker.js", // Output destination of the generated Service Worker
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // Split vendor code for caching
    },
  },
};
