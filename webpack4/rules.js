/**
 * Author: Mr.B
 * Date: 2017/7/7-18:02
 * Last Modified by: Nokey
 */
'use strict';

const path = require('path');

module.exports = {
    rules: [
        {
            test: /\.m?js$/,
            /*exclude: /umeditor/,*/
            include: [
                path.resolve(__dirname, '../src')
            ],
            loader: 'babel-loader',
            query: {
                presets: [
                    ['@babel/preset-env', {
                        'targets': 'last 2 versions, ie >= 9',
                        'useBuiltIns': 'entry'
                    }], 
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-transform-runtime',
                    ['import', { 
                        'libraryName': 'antd'
                    }]
                ],
                cacheDirectory: true
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
            test: /\.(csv)\??.*$/,
            use: [
                {
                    loader: 'csv-loader',
                    options:{
                        dynamicTyping: true,
                        header: true,
                        skipEmptyLines: true
                    }
                }
            ]
        }
    ]
}