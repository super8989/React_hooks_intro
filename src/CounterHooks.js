import React, { useState } from "react";

function CounterHooks() {
	const [count, setCount] = useState(0);
	//1. the piece of state
	//2. function to update that piece of state
	//3. initial value

	return (
		<div>
			<h1>The Count is: {count} </h1>
			<button onClick={() => setCount(count + 1)}>Add 1</button>
		</div>
	);
}

export default CounterHooks;
