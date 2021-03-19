/*
 * @Author: Nokey 
 * @Date: 2018-12-28 21:14:43 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-19 15:43:45
 */
'use strict'; 

import config from 'Base/config'

async function reqHomeList(){
    let res, res_json

    res = await fetch(config.io.home.news_json)

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
    }else{
        res_json = await res.json()
    }
    log.info('await fetch request')

    return res_json
}

export { reqHomeList }