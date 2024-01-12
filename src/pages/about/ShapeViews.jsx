import React from "react";
import img from "./img/shape1.png";
const ShapeViews = ({ children }) => {
	return (
		<section className="service-section position-relative">
			<div className="service-section-bg max-md-bottom-0"></div>
			<img
				src={img}
				alt=""
				className="service-bottom-shape d-none d-md-block"
			/>
			{children}
		</section>
	);
};

export default ShapeViews;
