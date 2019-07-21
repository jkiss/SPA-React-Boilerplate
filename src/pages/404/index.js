/*
 * @Author: Nokey 
 * @Date: 2018-09-25 10:22:47 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-25 10:27:01
 */
'use strict'; 

import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

const Page404 = (props) => {
    return ( 
        <div className={_s('box')}>
            404
        </div>
    );
}
 
export default Page404;