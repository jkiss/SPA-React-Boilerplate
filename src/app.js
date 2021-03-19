/*
 * @Author: Nokey 
 * @Date: 2018-03-30 16:16:43 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2021-03-19 19:37:42
 */
'use strict';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

// polyfill
import 'core-js/es/map'
import 'core-js/es/set'
import 'raf/polyfill'
import 'whatwg-fetch'

// Redux
import appReducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(
    appReducers,
    composeWithDevTools()
)

// core
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { mrb } from 'utils'
import { setWxShare } from 'utils/wxShare'
import config from 'Base/config'
import log from 'utils/log'

// coms
import Header from 'com/Header'
import Footer from 'com/Footer'
import Siderbar from 'com/Sidebar'
import Page404 from '404'

// pages
// import Home from 'Home'
// import NewsList from 'NewsList'
const Home = lazy(()=>import('Home') )
const NewsList = lazy(()=>import('NewsList'))

// Style
import 'fonts.styl'
import 'style/reset.styl'

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            collapsed: false
        }
    }

    componentDidMount() {
        mrb()

        log.warn('PRODUCTION', PRODUCTION)

        /**
         * wxShare
         */
        // setWxShare({
        //     title: CONFIG.page.title,
        //     desc: CONFIG.page.desc,
        //     site_link: CONFIG.page.url,
        //     img_url: CONFIG.page.thumb,
        //     success: ()=>{
        //         console.log('Share success!')
        //     },
        //     cancel: ()=>{
        //         console.log('Share cancel!')
        //     }
        // })
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    
    render() {
        return (
            <Provider store={store}>
                <Router>
                    
                    <Header/>
                    
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route
                                path={config.route.home.path}
                                element={<Home />} />
                            <Route
                                path={config.route.list.path}
                                element={<NewsList />} />

                            <Route path="*" element={<Page404/>} />
                        </Routes>
                    </Suspense>
                    
                    <Footer/>

                    <Siderbar/>
                    
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App /> , document.getElementById('app'))