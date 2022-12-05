// path : 운영체제별로 경로 표기법이 달라도 동일한 리소스를 찾아준다.
const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

require("dotenv").config();

module.exports = {
    // mode: "development",
    // mode: "production",
    mode: process.env.NODE_ENV === "development" ? "development" : "production",

    entry: {
        main: path.resolve("./src/app.js"),
    },

    output: {
        // name : entry 의 main
        filename: "[name].js",
        path: path.resolve("./dist"),
    },

    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: [path.resolve("./myLoader.js")],
            // },
            {
                test: /\.css$/,
                // 순서가 중요 : css-loader 후 style-loader
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: "asset",
                // type: "asset/inline",
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024, // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: "마지막 빌드 시간은 " + new Date().toLocaleString() + " 입니다.",
            // banner: `
            //     Commit version : ${childProcess.execSync("git rev-parse --short HEAD")}
            //     Committer : ${childProcess.execSync("git config user.name")}
            //     Commit Date : ${new Date().toLocaleString()}
            // `,
        }),
        new webpack.DefinePlugin({
            dev: JSON.stringify("https://dev.api.com"),
            pro: JSON.stringify("https://pro.api.com"),
            dotenv_dev: JSON.stringify(process.env.DEV_API),
            dotenv_pro: JSON.stringify(process.env.PRO_API),
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
};
