/* 
 * @Author: Nokey 
 * @Date: 2021-03-17 20:18:00 
 * @Last Modified by:   Mr.B 
 * @Last Modified time: 2021-03-17 20:18:00 
 */

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