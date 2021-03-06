/*
 * @Author: Nokey 
 * @Date: 2018-10-29 16:32:15 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-10-30 18:40:40
 */
'use strict'; 

const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    minimizer: [
        new TerserPlugin({
            terserOptions: {
                format: {
                    comments: false
                }
            },
            extractComments: false
        }),
        new CssMinimizerPlugin({
            minimizerOptions: {
                preset: [
                    'default',
                    {
                        discardComments: { removeAll: true }
                    }
                ]
            }
        })
    ],
    splitChunks: {
        chunks: 'all',
        minSize: 30000,
        // maxSize: 0,
        minChunks: 1,
        // maxAsyncRequests: 5,
        // maxInitialRequests: 3,
        automaticNameDelimiter: '_',
        // name: true,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                minChunks: 1,
                priority: -10,
                reuseExistingChunk: true,
                name: 'vendors'
            },
            default: {
                minChunks: 1,
                priority: -20,
                reuseExistingChunk: true,
                name: 'default'
            }
        }
    },
    runtimeChunk: {
        name: 'runtime'
    }
}