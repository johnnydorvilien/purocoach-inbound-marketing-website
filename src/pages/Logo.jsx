import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
const Logo = () => {
	return (
		<>
			<Link to="/" className="logo">
				<img src={logo} alt="" />
			</Link>
		</>
	);
};

export default Logo;
