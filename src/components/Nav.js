import React from "react";
import NetflixLogo from "../netflix-logo-transparent.png";
import AvatarLogo from "../Netflix-avatar.png";

import { auth } from "../firebase";
import { signOut } from "firebase/auth";

import { useLocation, useNavigate } from "react-router-dom";
function Nav() {
	const [scroll, setScroll] = React.useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	function scrollListner() {
		if (window.scrollY > 100) {
			setScroll(true);
		} else setScroll(false);
	}
	React.useEffect(() => {
		window.addEventListener("scroll", scrollListner);
		return () => window.removeEventListener("scroll", scrollListner);
	}, []);

	//does work without useEffect hook as just window.addEventListener("scroll", scrollListner);

	// when writing an explicit fucntion and padding that when clicked triggers the function when the scroll state is changed instead of running when the span element is clicked

	return (
		<div className={`nav-bar ${scroll && "nav--black"}`}>
			<div className="nav-container">
				<div className="nav-component">
					<img
						onClick={() => navigate("/")}
						className="logo"
						src={NetflixLogo}
					/>
					<span
						style={
							location.pathname === "/"
								? {
										color: "white",
								  }
								: {}
						}
						onClick={() => {
							location.pathname === "/"
								? window.scroll({
										top: 0,
										left: 0,
										behavior: "smooth",
								  })
								: navigate("/");
						}}
					>
						Home
					</span>
					<span>Tv Shows</span>
					<span>Movies</span>
					<span>Latest</span>
					<span>My List</span>
				</div>
				<div className="nav-component">
					<span className="search-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</span>
					<div
						onClick={() =>
							document
								.querySelector(".nav-dropdown")
								.classList.toggle("--dropdown-open")
						}
						className="avatar-container"
					>
						<img className="avatar" src={AvatarLogo} />
						<i className="fas fa-caret-down"></i>
					</div>
				</div>
			</div>
			<div className="nav-dropdown">
				<span onClick={() => navigate("/profile")}>Account</span>
				<span>Help Center</span>
				<span onClick={() => signOut(auth)}>Sign out of Netflix</span>
			</div>
		</div>
	);
}

export default Nav;
