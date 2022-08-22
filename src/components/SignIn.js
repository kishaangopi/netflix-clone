import React from "react";
import { auth } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

const SignInScreen = () => {
	const emailRef = React.useRef(null);
	const passwordRef = React.useRef(null);

	const register = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((userInfo) => console.log(userInfo))
			.catch((error) => {
				alert(error.message);
			});
	};

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((userInfo) => console.log(userInfo))
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="container-signIn">
			<h1>Sign In</h1>
			<form>
				<input
					ref={emailRef}
					placeholder="Email or phone number"
					type="email"
				/>
				<input ref={passwordRef} placeholder="Password" type="password" />
				<button onClick={signIn}>Sign In</button>
			</form>
			<div className="signin-footer">
				<span>New to Netflix?</span>
				<a href="" onClick={register}>
					Sign up now.
				</a>
			</div>
		</div>
	);
};

export default SignInScreen;
