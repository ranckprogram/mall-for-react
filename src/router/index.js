import React, {Component} from 'react'
// import {Router, Route, IndexRoute} from 'react-route'

import App from '../containers'
import Home from '../containers/home'
import User from '../containers/user'
import NoFound from '../containers/404'



export default class RouterMap extends Component {
	render () {
		return (<div>
			<App/>
			{/*<Router history={this.props.history}>*/}
				{/*<Route path='/' component={App}>*/}
					{/*<IndexRoute component={Home}/>*/}
					{/*<Route path="/user" components={User}/>*/}
				{/*</Route>*/}
			{/*</Router>*/}
		</div>)
	}
}