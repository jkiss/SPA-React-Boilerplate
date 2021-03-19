/* 
 * @Author: Nokey 
 * @Date: 2021-03-19 14:57:38 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-19 20:03:35
 */

import { Link } from 'react-router-dom'
import config from 'Base/config'

// Stylus
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

const Header = (props) => {
    return ( 
        <header className={_s('header')}>
            <Link to={`${config.route.home.path}?v=222`}>
                <span className={_s('link')}>Home</span>
            </Link>
            <Link to={config.route.list.path}>
                <span className={_s('link')}>List</span>
            </Link>
        </header>
    );
}
 
export default Header;
