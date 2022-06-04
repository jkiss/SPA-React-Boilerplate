/*
 * @Author: Nokey
 * @Date: 2017-02-24 14:16:31
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-17 19:22:25
 */
'use strict';

const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const poststylus = require('poststylus')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/**
 * Common config that can be used in dev & prod environment
 */
const ENTRY = require('./webpack/entry')
const RULES = require('./webpack/rules').rules
const PLUGINS = require('./webpack/plugins').plugins
const RESOLVE = require('./webpack/resolve')
const OPTIMIZITION = require('./webpack/optimization')

/**
 * Config
 */
const PUBLIC_PATH = config.public_path_prod

let NEW_PLUGINS
if(config.analyse_bundle){
    NEW_PLUGINS = PLUGINS.concat([ new BundleAnalyzerPlugin() ])
}else{
    NEW_PLUGINS = PLUGINS
}

module.exports = {
    mode: 'production',

    optimization: OPTIMIZITION,

    // dectool should be false if env is production!!!
    devtool: false, // false || 'cheap-eval-source-map'

    entry: ENTRY,

    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle/[name].js",
        publicPath: PUBLIC_PATH,
        clean: true
    },

    module: {
        rules: RULES.concat([

            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            // publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
    
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            // publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: /\.styl$/i,
                                localIdentName: '[hash:base64:6]'
                            }
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            stylusOptions: {
                                use: [
                                    poststylus([ 'autoprefixer', 'rucksack-css' ])
                                ]
                            }
                        }
                    }
                ]
            }
        ])
    },

    plugins: NEW_PLUGINS.concat([
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true)
        })
    ]),

    resolve: RESOLVE,

    stats: {
        // copied from `'minimal'`
        all: false,
        modules: true,
        // maxModules: 0,
        errors: true,
        warnings: true,
        // our additional options
        moduleTrace: true,
        errorDetails: true,
        builtAt: true,
        // 添加资源信息
        assets: true,
        performance: true,
        colors: true
    }
};
