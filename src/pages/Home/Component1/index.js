/*
 * @Author: Nokey 
 * @Date: 2018-09-27 14:49:29 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-27 17:23:58
 */
'use strict';

import React, { Component } from 'react'

// style
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

// res

class Component1 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <div id="component1" className={_s('box')}>
                { this.props.title }
            </div>
        );
    }
}
Component1.defaultProps = {
    title: 'Component1 content'
}

export default Component1