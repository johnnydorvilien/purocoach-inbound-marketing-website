import React from "react";

const Title = ({ title, className }) => {
	return (
		<div className={`section-title ${className ? className : ""}`}>
			<h2 className="title">{title}</h2>
			<span className="shadow-border"></span>
		</div>
	);
};

export default Title;
