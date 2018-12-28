/*
 * @Author: Nokey 
 * @Date: 2018-10-29 16:32:15 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-10-30 18:40:40
 */
'use strict'; 

module.exports = {
    splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '_',
        name: true,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                name: 'vendor'
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            }
        }
    },
    runtimeChunk: {
        name: 'manifest'
    }
}