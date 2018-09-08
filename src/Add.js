import React, {Component} from 'react';

class Add extends Component {
	constructor (props) {
		super(props)
	}
	
	render () {
		const numbers = [1, 2, 3, 4, 5];
		const itemList = numbers.map((index, number) =>
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