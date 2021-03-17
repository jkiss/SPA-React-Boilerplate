/*
 * @Author: Nokey 
 * @Date: 2018-09-13 16:20:19 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-17 20:05:23
 */
'use strict'; 

import { Component } from 'react'
import { Link } from 'react-router-dom'
import config from 'Base/config'

// Stylus
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

const Header = (props) => {
    return ( 
        <header className={_s('header')}>
            <Link to={config.route.home.path}>
                <span className={_s('link')}>Home</span>
            </Link>
            <Link to={config.route.list.path}>
                <span className={_s('link')}>List</span>
            </Link>
        </header>
    );
}
 
export default Header;
