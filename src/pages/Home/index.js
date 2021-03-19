/* 
 * @Author: Nokey 
 * @Date: 2021-03-19 14:41:14 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-19 20:25:31
 */

import { useEffect } from 'react'
import config from 'Base/config'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reqHomeList } from './api'
import log from 'utils/log'

// com
import Component1 from './Component1'

// Stylus
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

const Home = (props) => {
    const { str } = useParams()
    const [v, setV] = useSearchParams()
    const home = useSelector(state => state.home)
    const dispatch = useDispatch()

    log.info(str, v.get('v'))

    useEffect(()=>{
        let handleResize = ()=>{
            console.info('Resize...')
        }
        window.addEventListener('resize', handleResize)

        // Analytics - gtags
        // gtag('config', 'UA-???????', {
        //     'page_path': '/priceless-culture'
        // })

        dispatch({
            type: 'START_FETCH'
        })

        reqHomeList().then((ajax)=>{
            if(ajax.status == 200){
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: {
                        msg: 'Fetch home data success!',
                        data: ajax.data
                    }
                })
            }else{
                dispatch({
                    type: 'FETCH_FAILURE',
                    payload: {
                        msg: 'Fetch home data fail...'
                    }
                })
            }
        })

        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return ( 
        <section>
            search: {v.get('v')} <br/>
            param: {str}
        </section>
    );
}
 
export default Home;