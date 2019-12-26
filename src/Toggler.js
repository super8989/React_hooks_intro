import React, { useState } from "react";

function Toggler() {
	const [isHappy, setIsHappy] = useState(true);

	return <h1>{isHappy ? "😆" : "😭"}</h1>;
}

export default Toggler;
