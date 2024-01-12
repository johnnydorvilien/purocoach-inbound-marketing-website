import React from "react";

const BlackDivider = ({ margin }) => {
	return (
		<div className="container">
			<div
				className="section-divider"
				style={{ margin: margin ? margin : "" }}
			></div>
		</div>
	);
};

export default BlackDivider;
