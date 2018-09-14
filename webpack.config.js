/*
 * @Author: Nokey
 * @Date: 2017-02-24 14:16:31
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-06-03 21:35:46
 */
'use strict';

module.exports = function(env) {
    return require(`./webpack.${env}.js`)
}