const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
    assets: 'assets/',
    dist: path.join(__dirname, '../dist'),
    src: path.join(__dirname, '../src'),
};

module.exports = {
    externals: {
        paths: PATHS,
    },
    entry: {
        app: `${PATHS.src}/index.tsx`,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor:  {
                    chunks: 'all',
                    enforce: true,
                    name: 'vendors',
                    test: /node_modules/,
                },
            }
        },
    },
    output: {
        filename: `${PATHS.assets}js/[name].[chunkhash].js`,
        path: PATHS.dist,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [{
                    loader: 'babel-loader',
                        options: {
                        presets: ["@babel/typescript", "@babel/react"],
                            plugins: [
                            "@babel/proposal-class-properties",
                            "@babel/proposal-object-rest-spread"
                        ]}
                    }],
                exclude: /node_modules/
            },
            // {
            //     test: /\.(ts|tsx)$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'postcss-loader', options: {sourceMap: true, config: {path: './postcss.config.js'}}},
                    {loader: 'sass-loader', options: {sourceMap: true}}],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'postcss-loader', options: {sourceMap: true, config: {path: './postcss.config.js'}}},
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    }, {
                    loader: 'image-webpack-loader',
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.jsx', '.js' ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[contenthash].css`,
        }),
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/index.html`,
            filename: './index.html',

        }),
        new CopyWebpackPlugin([
            {from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},
            {from: `${PATHS.src}/static`, to: ``}
        ]),
    ]
};