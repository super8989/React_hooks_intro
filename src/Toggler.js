import React, { useState } from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
	const [isHappy, toggleIsHappy] = useToggle(true);
	const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);
	const [isBanana, toggleIsBanana] = useToggle(true);

	/* const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => {
    setIsHappy(!isHappy);
  }

  const [isHeartbroken, setIsHeartbroken] = useState(false);
  const toggleIsHeartbroken = () => {
    setIsHeartbroken(!isHeartbroken);
  } */

	return (
		<div>
			<h1 onClick={toggleIsHappy}>{isHappy ? "😆" : "😭"}</h1>
			<h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "💔" : "💖"}</h1>
			<h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍎"} </h1>
		</div>
	);
}

export default Toggler;
