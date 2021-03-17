/**
 * Author: Mr.B
 * Date: 2017/7/7-18:14
 * Last Modified by: Nokey
 */
'use strict';

const config = require('../config')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    plugins: [

        // Extract css file for every entry files
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'bundle/[contenthash].css'
            // chunkFilename: 'bundle/[name].css'
        })

        // generate index.html
        ,new htmlWebpackPlugin({
            inject: false,
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/htmlTemplates/app.ejs'),
            // chunks: ['manifest', 'vendor', e.entry.split('/').join('.')],

            page: config.page,
            ga_id: config.ga_id,
            fb_id: config.fb_id
        })

        // Automatically loaded modules when identifier is used as free variable in a module
        ,new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            '_': 'lodash',
            'PropTypes': 'prop-types'
        })

        // Copy static files to 'config.output' folder
        ,new CopyPlugin({
            patterns: [
                {
                    from: 'favicon.png',
                    to: ''
                },{
                    from: 'copy/',
                    to: 'vendor',
                    context: 'src/vendor/'
                },{
                    from: 'copy/',
                    to: 'media',
                    context: 'src/common/assets/',
                    globOptions: {
                        ignore: ['**/.DS_Store']
                    }
                }
            ]
        })
    ]
}