const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//
// Input paths
//

const EXTENSION_CONTENT_SCRIPT_PATH = path.resolve(__dirname, "src", "extension", "content.tsx");
const WEBSITE_JS_PATH = path.resolve(__dirname, "src", "website", "index.ts");
const WEBSITE_HTML_PATH = path.resolve(__dirname, "src", "website", "index.html");
const BACKEND_ENTRY_PATH = path.resolve(__dirname, "src", "backend", "index.ts");
const PUBLIC_PATH = path.resolve(__dirname, "public");
const MANIFEST_PATH = path.resolve(__dirname, "manifest.json");

//
// Output paths
//

const DIST_PATH = path.resolve(__dirname, "dist");

//
// Backend config
//

const backendConfig = {
   mode: "production",
   target: "node",
   entry: {
      "backend/index": BACKEND_ENTRY_PATH
   },
   output: {
      path: DIST_PATH,
      filename: "[name].js"
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
         }
      ],
   }
}

//
// Client config
//

const clientConfig = {
   mode: "production",
   entry: {
      "extension/content": EXTENSION_CONTENT_SCRIPT_PATH,
      "website/index": WEBSITE_JS_PATH
   },
   output: {
      path: DIST_PATH,
      filename: "[name].js",
   },
   resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
         }
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: WEBSITE_HTML_PATH,
         chunks: ["website/index"],
         filename: "website/index.html"
      }),
      new CopyPlugin({
         patterns: [
            {
               from: PUBLIC_PATH,
               to: DIST_PATH
            },
            {
               from: MANIFEST_PATH,
               to: path.resolve(DIST_PATH, "extension", "manifest.json")
            }
         ]
      }),
   ],
};

module.exports = [backendConfig, clientConfig];
