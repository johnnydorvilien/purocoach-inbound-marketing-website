import React from "react";

const CheckGroup = ({ value, setValue, children }) => {
	return (
		<>
			<label className="form-check form--check">
				<input
					className="form-check-input"
					type="checkbox"
					checked={value}
					onChange={(e) => {
						setValue(e.target.checked);
					}}
				/>
				<span className="form-check-label">{children}</span>
			</label>
		</>
	);
};

export default CheckGroup;
