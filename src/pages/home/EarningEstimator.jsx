import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import Select from "../../components/Select";

const EarningEstimator = () => {
	const [industry, setIndustry] = useState();
	const [coach, setCoach] = useState("10-50");
	const [result, setResult] = useState(false);

	const [range, setRange] = useState([0, 50]);

	const totalAmount = 10000000;
	const [tooltipAmount, setTooltipAmount] = useState(
		Math.ceil((totalAmount * range[1]) / 100)
	);

	useEffect(() => {
		setTooltipAmount(Math.ceil((totalAmount * range[1]) / 100).toFixed(0));
	}, [range, tooltipAmount]);

	const handleSubmit = (e) => {
		e.preventDefault();
		industry && coach && setResult(true);
	};

	return (
		<>
			<section className="earning-estimator-section">
				<div className="earning-estimator-bg"></div>
				<div className="container">
					<div className="row gy-5 gx-xxl-5">
						<div className="col-lg-6">
							<form
								onSubmit={handleSubmit}
								className="earning-estimator h-100"
							>
								<div>
									<h2 className="title">Earning Estimator</h2>
									<div className="left-line bg-dark"></div>
									<label className="light-label">
										1. What is the amount you are targeting (1 -5
										years)?
									</label>
									<div className="range-slider">
										<RangeSlider
											className="single-thumb"
											defaultValue={[0, range[1]]}
											thumbsDisabled={[true, false]}
											rangeSlideDisabled={true}
											onInput={setRange}
											step={"any"}
										/>
										<div
											className="range-tooltip"
											style={{ left: `${range[1]}%` }}
										>
											<div style={{ fontSize: "12px" }}>
												{tooltipAmount}
											</div>
										</div>
									</div>
									<div className="range-slider-amounts d-flex">
										<span>$50k</span>
										<span>$100k</span>
										<span>$250k</span>
										<span>$500k</span>
										<span>$1MM+</span>
									</div>
									<div className="left-line bg-dark"></div>
									<label className="light-label">
										2. What is your coaching industry?
									</label>
									<Select
										value={industry}
										setValue={setIndustry}
										data={industryData}
									/>
									<div className="left-line bg-dark"></div>
									<label className="light-label">
										3. How many client do you want to coach a week?
									</label>
									<Select
										value={coach}
										setValue={setCoach}
										data={coachWeekly}
									/>
									<button
										type="submit"
										className="cmn-btn btn-fullwidth mt-40"
									>
										Submit for Estimate
									</button>
								</div>
							</form>
						</div>
						<div className="col-lg-6">
							{/* {result && ( */}
							<div className="request-result h-100">
								<h2 className="title">Request Result</h2>
								<span className="left-line"></span>
								<ul className="list-info">
									{request_result?.map((item, i) => (
										<li key={i}>
											<span className="serial">{i + 1}</span>
											<span className="txt">{item?.title}</span>
										</li>
									))}
								</ul>
								<p className="m-0">
									Let us help you with a roadmap and a plan to reach
									your targeted outcome)
								</p>
								<button
									type="button"
									className="cmn-btn btn-fullwidth btn-white mt-40"
								>
									Lets Draw you the plan
								</button>
							</div>
							{/* )} */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
const industryData = [
	{
		value: "",
		title: "Select industry",
	},
	{
		value: "Tech Info",
		title: "Tech Info",
	},
	{
		value: "GuyTechLTD",
		title: "GuyTechLTD",
	},
];
const coachWeekly = [
	{
		value: "1-1",
		title: "1-1",
	},
	{
		value: "1-10",
		title: "1-10",
	},
	{
		value: "11-20",
		title: "11-20",
	},
	{
		value: "21-30",
		title: "21-30",
	},
];
const request_result = [
	{
		title: "You will need the basic, premium or professional subscription package",
	},
	{
		title: "You will need to sales rep.",
	},
	{
		title: "You will need one marketing strategist.",
	},
	{
		title: "You will need one coach assistant.",
	},
];
export default EarningEstimator;
