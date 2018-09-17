/*
 * @Author: Nokey 
 * @Date: 2018-03-16 10:40:52 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-14 18:07:35
 */
'use strict'; 

module.exports = {
    // Deploy
    public_path: '/priceless-culture'
    ,port: 9000

    // HTML meta data
    ,page:{
        title: 'Priceless Culture'
        ,desc: ''
        ,image: ''
        ,url: 'https://url/article/new-era-for-china.html'
        ,thumb: 'https://url/article/images/thumb.jpg'
    }

    // routes
    ,route:{
        home:{
            path: '/priceless-culture'
        },
        list: {
            path: '/priceless-culture/list'
        }
    }

    // request url
    ,io:{
        all_news_list: 'https://op.cgtn.com/data/2018/priceless-culture/feiyi_list.json'
    }
}