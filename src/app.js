/*
 * @Author: Nokey 
 * @Date: 2018-03-30 16:16:43 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2019-01-03 10:25:29
 */
'use strict';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

// polyfill
import 'raf/polyfill'
import '@babel/polyfill'

// Redux
import appReducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(
    appReducers,
    composeWithDevTools()
)

// core
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Util from 'utils'
import { setWxShare } from 'utils/wxShare'
import CONFIG from '../config'

// coms
import Header from 'com/Header'
import Footer from 'com/Footer'
import Siderbar from 'com/Sidebar'
import Page404 from '404'

// pages
import Home from 'Home'
import NewsList from 'NewsList'

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
                    <React.Fragment>
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

                        <Siderbar/>
                    </React.Fragment>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App /> , document.getElementById('app'))