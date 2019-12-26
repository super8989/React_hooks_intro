import React from "react";
import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";
import Toggler from "./Toggler";
import SimpleFormClass from "./SimpleFormClass";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<CounterClass />
			<CounterHooks />
			<Toggler />
			<SimpleFormClass />
		</div>
	);
}

export default App;
