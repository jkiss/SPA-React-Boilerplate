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
    ,plugin_url: ''
    ,ga_id: ''
    ,fb_id: ''
    ,analyse_bundle: true

    // HTML meta data
    ,page:{
        title: 'NULL'
        ,desc: ''
        ,image: ''
        ,url: 'https://url/article/index.html'
        ,thumb: 'https://url/article/images/thumb.jpg'
    }

    // routes
    ,route:{
        home:{
            path: '/home'
        },
        list: {
            path: '/home/list'
        },
        nav1:{
            path: '/nav1'
        },
        nav2:{
            path: '/nav2'
        }
    }

    // request url
    ,io:{
        home: {
            news_json: 'https://url/home_data.json'
        },
        list: {
            all_news_list: 'https://url/list_data.json'
        }
    }
}
