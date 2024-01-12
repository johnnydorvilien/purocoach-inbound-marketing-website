import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { EyeSlash, InfoIcon } from "./Icon";

const Input = ({
	label,
	type,
	eye,
	value,
	setValue,
	textarea,
	height,
	infoText,
	secondaryValue,
	submit,
	errText,
	newErr,
	...rest
}) => {
	const [inputType, setInputType] = useState(type);
	return (
		<div>
			{label && <label className="form-label form--label">{label}</label>}
			<div className="position-relative">
				{textarea ? (
					<textarea
						className="form-control form--control pt-2"
						type={inputType ? inputType : "text"}
						{...rest}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						style={{ height: height ? height : "" }}
					></textarea>
				) : (
					<>
						<input
							className="form-control form--control"
							type={inputType ? inputType : "text"}
							{...rest}
							value={value}
							onChange={(e) => setValue(e.target.value)}
							style={{
								opacity: secondaryValue ? "0" : "",
								position: "relative",
								zIndex: "3",
							}}
						/>
						{secondaryValue && (
							<input
								className="form-control form--control"
								style={{ position: "absolute", left: "0", top: "0" }}
								value={
									secondaryValue == "() -" ? "Phone" : secondaryValue
								}
							/>
						)}
						{infoText && (
							<OverlayTrigger
								placement="top"
								overlay={<Tooltip>{infoText}</Tooltip>}
							>
								<span
									className="eye"
									style={{
										top: "50%",
										transform: "translateY(-50%)",
										right: "5px",
									}}
								>
									<InfoIcon />
								</span>
							</OverlayTrigger>
						)}
					</>
				)}
				{eye &&
					(inputType == "password" ? (
						<span
							className="eye"
							onClick={() => {
								if (inputType === "password") {
									setInputType("text");
								} else {
									setInputType("password");
								}
							}}
						>
							{eye}
						</span>
					) : (
						<span
							className="eye"
							onClick={() => {
								if (inputType === "password") {
									setInputType("text");
								} else {
									setInputType("password");
								}
							}}
						>
							<EyeSlash />
						</span>
					))}
			</div>
			{submit && !value ? (
				<div className="err-text">{errText}</div>
			) : newErr ? (
				<div className="err-text">{newErr}</div>
			) : (
				""
			)}
		</div>
	);
};

export default Input;
