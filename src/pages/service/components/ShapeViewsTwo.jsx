import React from "react";
import shape from "../img/shapes2.png";
const ShapeViewsTwo = ({ parentShape, children, bg }) => {
	return (
		<section className="partner-with-us shapes-view-2">
			<div className="feature-bg" style={{ background: bg ? bg : "" }}></div>
			<img
				src={parentShape ? parentShape : shape}
				className="top-right-shape d-none d-sm-block"
				alt=""
			/>
			{children}
		</section>
	);
};

export default ShapeViewsTwo;
