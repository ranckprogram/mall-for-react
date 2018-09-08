import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Add from './Add.js'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			numbers: [1, 5, 4, 2]
		}
		this.handleClick = this.handleClick.bind(this)
	}
	
	
	handleClick () {
		console.dir(1)
	}
	
	render () {
		
		return (
			<div className="App">
				<Add numbers={this.state.numbers} />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			
			</div>
		);
	}
}

console.dir(App)
export default App;
