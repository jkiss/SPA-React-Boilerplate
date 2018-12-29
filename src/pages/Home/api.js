/*
 * @Author: Nokey 
 * @Date: 2018-12-28 21:14:43 
 * @Last Modified by:   Mr.B 
 * @Last Modified time: 2018-12-28 21:14:43 
 */
'use strict'; 

import config from '../../../config'
import axios from 'axios'

async function reqHomeList(){
    try {
        let data = await axios.get(config.io.home.news_json)
        
        return data
    } catch (err) {
        return {
            status: 500,
            msg: err + ''
        }
    }
}

export { reqHomeList }