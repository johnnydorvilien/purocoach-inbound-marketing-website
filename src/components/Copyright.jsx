import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
	return (
		<div className="copyright">
			<div className="container">
				<Link to="#">Privacy Policy </Link>
				<span>&copy; Company 2023. All rights reserved.</span>
			</div>
		</div>
	);
};

export default Copyright;
