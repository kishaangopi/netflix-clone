import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/profile";

//firebase
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

//redux
import { logIn, logOut, userSelector } from "../src/features/userSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
	const user = useSelector(userSelector);
	const dispatch = useDispatch();
	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (AuthUser) => {
			if (AuthUser) {
				dispatch(
					logIn({
						uid: AuthUser.uid,
						email: AuthUser.email,
					})
				);
			} else {
				dispatch(logOut());
			}
		});

		return unsubscribe;
	}, [dispatch]);
	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<Routes>
						<Route path="/profile" element={<Profile />} />
						<Route exact path="/" element={<Home />} />
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;
