/*
 * @Author: Nokey 
 * @Date: 2018-12-27 14:16:11 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-12-27 14:16:56
 */
'use strict';

const webpack = require('webpack')
const path = require('path')
const config = require('./config')
const poststylus = require('poststylus')

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
    devtool: 'cheap-eval-source-map', // false || 'cheap-eval-source-map'

    // devServer
    devServer: {
        port: PORT,
        contentBase: path.join(__dirname, './build'),
        hot: true,
        historyApiFallback: {
            index: PUBLIC_PATH+'/index.html'
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
                test: /\.(gif|png|jpg|mp3|mp4|obj|mtl|glb)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 1024,
                            name: 'media/[hash].[ext]'
                        }
                    }
                ]
            },
    
            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 1024,
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },

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
                            modules: true,
                            localIdentName: '[local]__[hash:base64:10]'
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

    plugins: PLUGINS.concat([
        new webpack.HotModuleReplacementPlugin()
    ]),

    resolve: RESOLVE,

    stats: {
        // copied from `'minimal'`
        all: false,
        modules: true,
        maxModules: 0,
        errors: true,
        warnings: true,
        // our additional options
        moduleTrace: true,
        errorDetails: true,
        builtAt: true
    }
};