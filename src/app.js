/*
 * @Author: Nokey 
 * @Date: 2018-03-30 16:16:43 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-09-14 18:10:41
 */
'use strict';

import 'babel-polyfill'
import 'jwplayer'
jwplayer.key="IaFpnm2qy71qN1ip6dC+1PkqT2JClZfpdNl7lYjX15g="

// core
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Util from 'utils'
import CONFIG from '../config'

// components
import Header from 'com/Header'
import Footer from 'com/Footer'
import Home from 'Home'
import NewsList from 'NewsList'

// Style
import 'roboto-thin.styl'
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
        exact: true,
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
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div>
                        <Link to={CONFIG.route.home.path}>Home </Link>
                        <Link to={CONFIG.route.list.path}>List</Link>
                    </div>
                    
                    <Switch>
                        {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                        ))}

                        <Route render={() => <div>Not Found</div>} />
                    </Switch>
                    
                    <Footer/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App /> , document.getElementById('app'))