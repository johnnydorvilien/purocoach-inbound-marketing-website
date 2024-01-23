import React from "react";

const Title = ({ title, className }) => {
	const shouldShowBorder = title !== "Our Services" && title !== "CRM Software";
	return (
		<div className={`section-title ${className ? className : ""}`}>
			<h2 className="title">{title}</h2>
			{shouldShowBorder && <span className="shadow-border"></span>}
		</div>
	);
};

export default Title;
