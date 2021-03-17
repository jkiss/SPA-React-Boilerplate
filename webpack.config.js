/*
 * @Author: Nokey
 * @Date: 2017-02-24 14:16:31
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-17 18:49:58
 */
'use strict';

module.exports = env => env.dev ? require(`./webpack.dev.js`) : require(`./webpack.prod.js`)