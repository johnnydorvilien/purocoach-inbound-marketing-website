/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Check } from "./Icon";

const Select = ({ label, value, setValue, data, submit, errText, ...rest }) => {
	const [val, setVal] = useState(value);

	useEffect(() => {
		setValue(val);
	}, [val]);

	return (
		<div>
			{label && <label className="form-label form--label">{label}</label>}
			<div className="select-item">
				{val && (
					<span className="check-icon">
						<Check />
					</span>
				)}
				<select
					className={`form-control form--control form-select ${
						val ? "ps-40 ps-sm-5 selected" : ""
					}`}
					onChange={(e) => setVal(e.target.value)}
				>
					{data?.map((item, i) => (
						<option key={i} value={item?.value}>
							{item?.title}
						</option>
					))}
				</select>
			</div>
			{submit && !value && <div className="err-text">{errText}</div>}
		</div>
	);
};

export default Select;
