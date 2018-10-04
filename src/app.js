/*
 * @Author: Nokey 
 * @Date: 2018-03-30 16:16:43 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-25 10:27:59
 */
'use strict';

import 'babel-polyfill'
import 'jwplayer'
jwplayer.key="IaFpnm2qy71qN1ip6dC+1PkqT2JClZfpdNl7lYjX15g="

// Redux
import appReducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(appReducers)

// core
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Util from 'utils'
import { setWxShare } from 'utils/wxShare'
import CONFIG from '../config'

// components
import Header from 'com/Header'
import Footer from 'com/Footer'
import Home from 'Home'
import NewsList from 'NewsList'
import Page404 from '404'

// Style
import 'roboto-light.styl'
import 'styl/reset.styl'
import 'styl/app.styl'

// Routes
const routes = [
    {
        path: CONFIG.route.home.path,
        exact: true,
        main: () => <Home />
    },{
        path: CONFIG.route.list.path,
        exact: false,
        main: () => <NewsList />
    }
]

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            collapsed: false
        }
    }

    componentDidMount() {
        Util.CR()

        // wxShare
        setWxShare({
            title: CONFIG.page.title,
            desc: CONFIG.page.desc,
            site_link: CONFIG.page.url,
            img_url: CONFIG.page.thumb,
            success: ()=>{
                console.log('Share success!')
            },
            cancel: ()=>{
                console.log('Share cancel!')
            }
        })
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
                    <div>
                        <Header/>
                        
                        <Switch>
                            {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                            ))}

                            <Route component={Page404} />
                        </Switch>
                        
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App /> , document.getElementById('app'))