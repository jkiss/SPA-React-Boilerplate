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
                        'useBuiltIns': 'entry',
                        'corejs': 2
                    }], 
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-transform-runtime',
                    ['import', { 
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: 'css'
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
            test: /\.(csv)$/,
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
        },

        {
            // 匹配 *.worker.js
            test: /\.worker\.js$/,
            use: {
                loader: 'worker-loader',
                options: {
                    // name: '[name]:[hash:8].js',
                    inline: true
                    // fallback: false
                    // publicPath: '/scripts/workers/'
                }
            }
        }
    ]
}