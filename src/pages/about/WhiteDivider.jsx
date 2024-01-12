import React from "react";

const WhiteDivider = ({ margin }) => {
	return (
		<div className="container">
			<div
				className="white-divider"
				style={{ marginBlock: margin ? margin : "" }}
			></div>
		</div>
	);
};

export default WhiteDivider;
