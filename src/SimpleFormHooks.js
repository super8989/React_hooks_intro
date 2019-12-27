import React, { useState } from "react";

function SimpleFormHooks() {
	const [email, setEmail] = useState("hello");

	return (
		<div>
			<h1>The value is ..</h1>
			<input type='text' value={email} />
		</div>
	);
}

export default SimpleFormHooks;
