const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd =!isDev

const optimization = () => {
    const config = {

    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: {
        main: './pointer.js',
        Bomb_Countdown: './Bomb Countdown/main.js',
        Game_refrigerator: './Games/The Pilots Brothers refrigerator/main.js',
        Game_mole: './Games/Whack a mole/main.js',
        Messenger: './Messenger/main.js',
        ArtStation: './ArtStation/main1.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: true
            },
            excludeChunks:['Bomb_Countdown', 'Game_refrigerator', 'Game_mole', 'Messenger','ArtStation']
        }),
        new HTMLWebpackPlugin({
            template: "./Bomb Countdown/index.html",
            filename: "Bomb_Countdown.html",
            minify: {
                collapseWhitespace: true
            },
            excludeChunks:['main', 'Game_refrigerator', 'Game_mole', 'Messenger','ArtStation']
        }),
        new HTMLWebpackPlugin({
            template: "./ArtStation/index.html",
            filename: "ArtStation.html",
            minify: {
                collapseWhitespace: true
            },
            excludeChunks:['main', 'Game_refrigerator', 'Game_mole', 'Messenger','Bomb_Countdown']
        }),
        new HTMLWebpackPlugin({
            template: "./Games/index.html",
            filename: "Games.html",
            minify: {
                collapseWhitespace: true
            },
            excludeChunks:['Game_refrigerator', 'Game_mole', 'Messenger','Bomb_Countdown','ArtStation']
        }),
        new HTMLWebpackPlugin({
            template: "./Messenger/index.html",
            filename: "Messenger.html",
            minify: {
                collapseWhitespace: true
            },
            excludeChunks:['Game_refrigerator', 'Game_mole', 'main','Bomb_Countdown','ArtStation']
        }),
        new HTMLWebpackPlugin({
            template: "./Games/Whack a mole/base for a mole.html",
            filename: "Whack_a_mole.html",
            minify: {
                collapseWhitespace: true
            },
            excludeChunks:['Game_refrigerator', 'main', 'Messenger','Bomb_Countdown','ArtStation']
        }),
        new HTMLWebpackPlugin({
            template: "./Games/The Pilots Brothers refrigerator/The Pilots Brothers' refrigerator.html",
            filename: "The_Pilots_Brothers_refrigerator.html",
            minify: {
                collapseWhitespace: true
            },
            excludeChunks:['Game_mole', 'main', 'Messenger','Bomb_Countdown','ArtStation']
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}