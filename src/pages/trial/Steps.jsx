import React from "react";
import { Check } from "../../components/Icon";

const Steps = ({ step }) => {
	return (
		<>
			<ul className={`steps`}>
				{steps?.map((item, i) => (
					<li
						key={i}
						className={
							step === i + 1 ? "current" : step > i + 1 ? "succeed" : ""
						}
					>
						<span>
							Step {i + 1}{" "}
							{step > i + 1 && (
								<span className="ms-2 ms-sm-3">
									<Check />
								</span>
							)}
						</span>
					</li>
				))}
			</ul>
		</>
	);
};
const steps = ["", "", ""];

export default Steps;
