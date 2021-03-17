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
            options: {
                presets: [
                    ['@babel/preset-env', {
                        'targets': 'last 2 versions, ie >= 11',
                        'useBuiltIns': 'usage',
                        'corejs': 3
                    }], 
                    ["@babel/preset-react", {
                        "runtime": "automatic"
                    }]
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
                    inline: 'fallback'
                    // fallback: false
                    // publicPath: '/scripts/workers/'
                }
            }
        },

        {
            test: /\.(gif|png|jpg|mp3|mp4|obj|mtl|glb)$/,
            type: 'asset',
            parser: {
                dataUrlCondition: {
                    maxSize: 4 * 1024 // 4kb
                }
            },
            generator: {
                filename: 'media/[contenthash][ext]'
            }
        },

        {
            test: /\.(woff|woff2|svg|eot|ttf)$/,
            type: 'asset',
            parser: {
                dataUrlCondition: {
                    maxSize: 4 * 1024 // 4kb
                }
            },
            generator: {
                filename: 'fonts/[contenthash][ext]'
            }
        }
    ]
}