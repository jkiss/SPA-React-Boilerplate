/*
 * @Author: Nokey
 * @Date: 2017-02-24 14:16:31
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-12-27 14:25:07
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
const ENTRY = require('./webpack4/entry')
const RULES = require('./webpack4/rules').rules
const PLUGINS = require('./webpack4/plugins').plugins
const RESOLVE = require('./webpack4/resolve')
const OPTIMIZITION = require('./webpack4/optimization')

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
        publicPath: PUBLIC_PATH
    },

    module: {
        rules: RULES.concat([
            {
                test: /\.(gif|png|jpg|mp3|mp4|obj|mtl|glb)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '/media/[hash].[ext]'
                        }
                    }
                ]
            },
    
            {
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '/fonts/[name].[ext]'
                        }
                    }
                ]
            },

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
                            modules: true,
                            localIdentName: '[hash:base64:12]'
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            use: [
                                poststylus([ 'autoprefixer', 'rucksack-css' ])
                            ]
                        }
                    }
                ]
            }
        ])
    },

    plugins: NEW_PLUGINS,

    resolve: RESOLVE
};