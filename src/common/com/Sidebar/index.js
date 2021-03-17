/*
 * @Author: Nokey 
 * @Date: 2019-01-03 10:13:55 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-17 20:08:39
 */
'use strict'; 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from 'Base/config'

// Stylus
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

const Sidebar = (props) => {
    return ( 
        <nav className={_s('box')}>
            <div className={_s('item')}>
                <Link to={config.route.nav1.path}>
                    Nav 1
                </Link>
            </div>
            <div className={_s('item')}>
                <Link to={config.route.nav2.path}>
                    Nav 2
                </Link>
            </div>
        </nav>
    );
}
 
export default Sidebar;