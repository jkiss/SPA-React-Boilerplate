/*
 * @Author: Nokey 
 * @Date: 2017-10-11 16:05:30 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2020-10-19 14:30:00
 */
'use strict';

import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Loader } from 'resource-loader'
import log from 'utils/log'

// Style
import classNames from 'classnames/bind'
import styles from './css'
let _s = classNames.bind(styles)

// init
document.body.style.height = '100%'
document.body.style.overflow = 'hidden'

const loader = new Loader()
const Loading = (props) => {
    const dispatch = useDispatch()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        log.info('props.manifest', props.manifest)
        loader
            .add(props.manifest)
            .load((loader, resources) => {

            })

        loader.onProgress.add((loader, resources) => {
            setProgress(parseInt(loader.progress))
        }); // called once per loaded/errored file
        loader.onError.add(() => {}); // called once per errored file
        loader.onLoad.add(() => {}); // called once per loaded file
        loader.onComplete.add(() => {
            dispatch({
                type: 'SET_LOADED',
                payload: {
                    loaded: true
                }
            })

            document.body.style.height = 'auto'
            document.body.style.overflow = 'visible'
        }); // called once when the queued resources all load.

    }, [])

    return ( 
        <div className={_s('percent')}>
            LOADING...{progress}%
        </div>
    )
}

export default Loading;