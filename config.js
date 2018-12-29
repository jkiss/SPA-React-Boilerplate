/*
 * @Author: Nokey 
 * @Date: 2018-03-16 10:40:52 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-12-27 16:50:57
 */
'use strict'; 

module.exports = {
    // Deploy
    public_path: '/home'
    ,port: 8686

    // HTML meta data
    ,page:{
        title: 'NULL'
        ,desc: ''
        ,image: ''
        ,url: 'https://url/article/new-era-for-china.html'
        ,thumb: 'https://url/article/images/thumb.jpg'
    }

    // routes
    ,route:{
        home:{
            path: '/home'
        },
        list: {
            path: '/home/list'
        }
    }

    // request url
    ,io:{
        home: {
            news_json: 'https://op.cgtn.com/data/2018/priceless-culture/feiyi_list.json'
        },
        list: {
            all_news_list: 'https://op.cgtn.com/data/2018/priceless-culture/feiyi_list.json'
        }
    }
}