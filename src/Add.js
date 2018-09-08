import React, {Component} from 'react';

class Add extends Component {
	constructor (props) {
		super(props)
		
		console.dir(this)
	}
	
	render () {
		const itemList = this.props.numbers.map((number, index) =>
			<li key={index} onClick={this.handleClick}>{number}</li>
		);
		return (
			<div>
				<ul>
					{itemList}
				</ul>
			</div>
		)
	}
	
}

export default Add