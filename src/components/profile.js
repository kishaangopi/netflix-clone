import React from "react";
import Nav from "./Nav";
import AvatarLogo from "../Netflix-avatar.png";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { userSelector } from "../features/userSlice";

const Profile = () => {
	const user = useSelector(userSelector);
	return (
		<div className="profile">
			<Nav />
			<div className="profile-container">
				<h1>Edit Profile</h1>
				<div className="profile-content">
					<img src={AvatarLogo} alt="" />
					<div className="profile-plan-surrounder">
						<h3>{user.email}</h3>
						<h3>Plans</h3>
						<div className="plans-container">
							<div className="plan">
								<div className="plan-content">
									<h4>Netflix Standard</h4>
									<span>1080p</span>
								</div>
								<button className="subscribe-btn">Subscribe</button>
							</div>
							<div className="plan">
								<div className="plan-content">
									<h4>Netflix Basic</h4>
									<span>480p</span>
								</div>
								<button className="subscribe-btn">Subscribe</button>
							</div>
							<div className="plan">
								<div className="paln-content">
									<h4>Netflix Permium</h4>
									<span>4K+HDR</span>
								</div>
								<button className="subscribe-btn --current">Current</button>
							</div>
						</div>
						<button className="signout-btn" onClick={() => signOut(auth)}>
							Sign Out
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
