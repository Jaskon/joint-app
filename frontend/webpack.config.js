const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: "./src/index.tsx",
    ...(prod ? {} : { devtool: "eval-source-map" }),

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    },
    output: {
        path: path.join(__dirname, "/build"),
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
                exclude: /build/,
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
            template: "./public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
};
