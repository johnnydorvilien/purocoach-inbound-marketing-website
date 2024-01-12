import React, { useEffect, useState } from "react";

import RangeSlider from "react-range-slider-input";
import { Link } from "react-router-dom";
const RangeItem = () => {
	const [range, setRange] = useState([0, 51]);
	const totalUser = 51;
	const [tooltipUser, setTooltipUser] = useState(
		Math.ceil((totalUser * range[1]) / 100)
	);

	useEffect(() => {
		setTooltipUser(Math.ceil((totalUser * range[1]) / 100));
	}, [range]);
	return (
		<>
			<div className="range-slider-item">
				<div className="range-slider">
					<RangeSlider
						className="single-thumb"
						defaultValue={[0, range[1]]}
						thumbsDisabled={[true, false]}
						rangeSlideDisabled={true}
						onInput={setRange}
						step={"any"}
						max={100}
						min={1}
					/>
					<div className="range-tooltip" style={{ left: `${range[1]}%` }}>
						{tooltipUser >= totalUser ? (
							<>
								<small>{tooltipUser - 1}+ Users</small>
								<div>
									<Link to="#">Contact Sales</Link>
								</div>
							</>
						) : (
							<div style={{ fontSize: "12px" }}>{tooltipUser} Users</div>
						)}
					</div>
				</div>
				<div className="range-slider-scales">
					{[
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
						"",
					]?.map((item, i) => (
						<span key={i}></span>
					))}
				</div>
				<div className="range-slider-amounts range-slider-amounts-2 d-flex justify-content-between">
					<span>1</span>
					<span>25 users</span>
					<span>50+</span>
				</div>
			</div>
		</>
	);
};

export default RangeItem;
