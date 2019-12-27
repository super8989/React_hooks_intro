import React from "react";
import useInputState from "./hooks/useInputState";

export default function SimpleFormInputHook() {
	const [email, updateEmail, resetEmail] = useInputState("");
	const [password, updatePassword, resetPassword] = useInputState("");

	return (
		<div>
			<h1>SimpleFormInputHook</h1>
			<h3>
				Email: {email} & Password: {password}
			</h3>
			<input type='text' value={email} onChange={updateEmail} />
			<input type='text' value={password} onChange={updatePassword} />
			<button onClick={resetEmail}>Reset Email</button>
			<button onClick={resetPassword}>Reset Password</button>
		</div>
	);
}
