import React, { Component } from "react";

class CounterClass extends Component {
	constructor(props) {
		super(props);
		const savedCount = JSON.parse(window.localStorage.getItem("count"));

		this.state = {
			count: savedCount || 0
		};
		this.increment = this.increment.bind(this);
	}

	increment() {
		this.setState({ count: this.state.count + 1 }, this.syncLocalStorage);
	}

	syncLocalStorage() {
		window.localStorage.setItem("count", JSON.stringify(this.state.count));
	}

	render() {
		return (
			<div>
				<h1>The Count is: {this.state.count} </h1>
				<button onClick={this.increment}>Add 1</button>
			</div>
		);
	}
}

export default CounterClass;
