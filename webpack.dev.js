/*
 * @Author: Nokey 
 * @Date: 2018-12-27 14:16:11 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-19 19:32:02
 */
'use strict';

const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const poststylus = require('poststylus')

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
const PORT = config.port
const PUBLIC_PATH = config.public_path_dev

/**
 * Dev plugins
 */
// const openBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
    mode: 'development',

    optimization: OPTIMIZITION,

    // dectool should be false if env is production!!!
    devtool: 'eval-cheap-source-map', // false || 'cheap-eval-source-map'

    // devServer
    devServer: {
        host: '127.0.0.1',
        port: PORT,
        static: [{
            directory: path.join(__dirname, './build')
        }],
        dev: {
            publicPath: PUBLIC_PATH
        },
        hot: true,
        historyApiFallback: {
            index: PUBLIC_PATH
        }
    },

    entry: ENTRY,

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle/[name].js',
        publicPath: PUBLIC_PATH
    },

    module: {
        rules: RULES.concat([

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
    
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: /\.styl$/i,
                                localIdentName: '[local]__[hash:base64:4]'
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

    plugins: PLUGINS.concat([
        new webpack.HotModuleReplacementPlugin()

        ,new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false)
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
        builtAt: true
    }
};