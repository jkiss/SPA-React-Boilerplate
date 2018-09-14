/**
 * Author: Mr.B
 * Date: 2017/7/7-18:02
 * Last Modified by: Nokey
 */
'use strict';

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    loaders: [
        {
            test: /\.js$/,
            include: [
                path.resolve(__dirname, '../src')
            ],
            loader: 'babel-loader',
            query: {
                presets: [
                    ['env', {
                        'targets': {
                            'browsers': ['last 2 versions', 'ie >= 9']
                        }
                    }],
                    'react'
                ],
                plugins: [['import', { 
                    'libraryName': 'antd'
                }]],
                cacheDirectory: false
            }
        },

        {
            // 将jQuery导出到全局变量，来支持依赖它的插件
            test: require.resolve('jquery'),
            use: [
                {
                    loader: 'expose-loader',
                    query: 'jQuery'
                },
                {
                    loader: 'expose-loader',
                    query: '$'
                }
            ]
        },

        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        },

        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]-[hash:base64:5]'
                        }
                    },
                    'less-loader'
                ]
            })
        },

        {
            test: /\.styl$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]-[hash:base64:5]'
                        }
                    },
                    'stylus-loader'
                ]
            })
        }
    ]
}