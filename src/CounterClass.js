import React, { Component } from "react";

class CounterClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	render() {
		return (
			<div>
				<h1>The Count Is: {this.state.count} </h1>
				<button>Add 1</button>
			</div>
		);
	}
}

export default CounterClass;
