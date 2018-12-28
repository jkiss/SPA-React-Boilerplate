/*
 * @Author: Nokey 
 * @Date: 2018-03-30 16:29:13 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-12-27 17:15:39
 */
'use strict';

import React, { Component } from 'react'
import CONFIG from '../../../config'

// Style
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

// res

class NewsList extends React.Component {
    componentDidMount() {
        var _me = this

        // Analytics - gtags
        // gtag('config', 'UA-???????', {
        //     'page_path': '/priceless-culture/list'
        // })
    }

    render() {
        return (
            <div className={_s('list-box')}>
                <div className={_s('list-wrapper')}>
                    
                </div>
            </div>
        );
    }
}
NewsList.defaultProps = {
    centerImgs: []
}

export default NewsList;