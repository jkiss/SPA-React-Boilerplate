/*
 * @Author: Nokey 
 * @Date: 2018-03-16 10:40:52 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-19 20:12:19
 */
'use strict'; 

const pub_path = '/'

module.exports = {
    // Deploy
    public_path_dev: pub_path
    ,public_path_prod: '/project1' // public下面的资源目录
    ,port: 8686
    ,plugin_url: `${pub_path}vendor/`
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
            path: `${pub_path}home/:str`,
            me: `${pub_path}user/me`,
            login: `${pub_path}user/login`,
            profile: `${pub_path}user/profile`,
            setting: `${pub_path}user/setting`,
        },
        list: {
            path: `${pub_path}list`
        },
        nav1:{
            path: './nav1'
        },
        nav2:{
            path: './nav2'
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
