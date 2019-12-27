import React from "react";
import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";
import Toggler from "./Toggler";
import SimpleFormClass from "./SimpleFormClass";
import SimpleFormHooks from "./SimpleFormHooks";
import "./App.css";
import SimpleFormInputHook from "./SimpleFormInputHook";

function App() {
	return (
		<div className='App'>
			<CounterClass />
			<CounterHooks />
			<Toggler />
			<SimpleFormClass />
			<SimpleFormHooks />
			<SimpleFormInputHook />
		</div>
	);
}

export default App;
