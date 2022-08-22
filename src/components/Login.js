import React from "react";
import SignInScreen from "./SignIn";
import NetflixLogo from "../netflix-logo-transparent.png";
const Login = () => {
	const [signIn, setSignIn] = React.useState(false);

	return (
		<div className="login-container">
			<div className="login-screen">
				<div className="login-nav">
					<img src={NetflixLogo} />
					<button onClick={() => setSignIn(true)}>Sign In</button>
				</div>
				{!signIn ? (
					<div className="login-content">
						<h1>Unlimited movies, TV shows and more.</h1>
						<h2>Watch anywhere. Cancel anytime.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<form>
							<div className="form-input-btn">
								<input className="nav-input" />
								<button className="btn-started" onClick={() => setSignIn(true)}>
									Get Started
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 btn-arrow"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>
							</div>
						</form>
					</div>
				) : (
					<SignInScreen />
				)}
			</div>
			<div className="login-gradient"></div>
		</div>
	);
};

export default Login;
