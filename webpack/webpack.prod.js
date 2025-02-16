const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js", // Use content hash for caching
    path: path.resolve(__dirname, "../build"),
    publicPath: "/",
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
        generator: {
          filename: "assets/[name].[contenthash][ext]", // Output path for images
        },
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
      filename: "index.html",
      inject: "body",
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/manifest.json", to: "manifest.json" },
        { from: "public/favicon.ico", to: "favicon.ico" },
      ],
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
