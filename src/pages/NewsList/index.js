/* 
 * @Author: Nokey 
 * @Date: 2021-03-19 15:53:31 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-19 19:24:28
 */

import { useEffect } from 'react'
import config from 'Base/config'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { reqNewsList } from './api'

// Style
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

const NewsList = (props) => {
    const list = useSelector(state => state.list)
    const dispatch = useDispatch()

    useEffect(()=>{
        reqNewsList().then((ajax)=>{
            if(ajax.status == 200){
                dispatch({
                    type: 'list_FETCH_SUCCESS',
                    payload: {
                        msg: 'Fetch list data success!',
                        data: ajax.data
                    }
                })
            }else{
                dispatch({
                    type: 'list_FETCH_FAILURE',
                    payload: {
                        msg: 'Fetch list data fail...'
                    }
                })
            }
        })

        // Analytics - gtags
        // gtag('config', 'UA-???????', {
        //     'page_path': '/priceless-culture/list'
        // })
    }, [])

    return ( 
        <section>

        </section>
    );
}
 
export default NewsList;