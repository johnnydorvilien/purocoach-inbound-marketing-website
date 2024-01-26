import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import Select from "../../components/Select";
import img from "./img/yourgrowth.png";
import mobile from "./img/mobilegrowth.png";
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
			<section className="earning-estimator-section" style={{
						background: `url(${window.innerWidth > 479 ? img : mobile}) no-repeat top right / cover`,display:"block",backgroundSize:"100% 100%"}}>
				{/* <div className="earning-estimator-bg"></div> */}
				<div>

				</div>
				<div className="container">
					<div className="row gy-5 gx-xxl-5">
						<div className="col-lg-6">
							<form
								onSubmit={handleSubmit}
								className="earning-estimator h-100"
							>
								<div>
									<h2 className="title">
										Your Growth
										</h2>
								
									<label className="light-label">
										{/* 1. What is the amount you are targeting (1 -5
										years)? */}
										<span>1.</span> Increase online visibility
									</label>
									
									<label className="light-label">
										{/* 2. What is your coaching industry? */}
										<span>2.</span> Reach your exact targeted audience
									</label>
									{/* <Select
										value={industry}
										setValue={setIndustry}
										data={industryData}
									/>
									<div className="left-line bg-dark"></div> */}
									<label className="light-label">
										{/* 3. How many client do you want to coach a week? */}
										<span>3.</span> Generate and attract qualified leads
									</label>
									{/* <Select
										value={coach}
										setValue={setCoach}
										data={coachWeekly}
									/>
									<button
										type="submit"
										className="cmn-btn btn-fullwidth mt-40"
									>
										Submit for Estimate
									</button> */}
									<label className="light-label">
										{/* 3. How many client do you want to coach a week? */}
										<span>4.</span> Keep your prospects engaged
									</label>
									<label className="light-label">
										{/* 3. How many client do you want to coach a week? */}
										<span>5.</span> Delight each prospect with great content
									</label>
									<label className="light-label">
										{/* 3. How many client do you want to coach a week? */}
										<span>6.</span> Measure results and track progress
									</label>
									<label className="light-label">
										{/* 3. How many client do you want to coach a week? */}
										<span>7.</span> Continue to scale and grow
									</label>
								</div>
							</form>
						</div>
						<div className="col-lg-6">
							{/* {result && ( */}
							<div className="request-result h-100">
								<h2 className="title">
									{/* Request Result */}
									Our Mission
								</h2>
								{/* <span className="left-line"></span> */}
								<ul className="list-info">
									{request_result?.map((item, i) => (
										<li key={i}>
											<span className="serial">{i + 1}</span>
											<span className="txt">{item?.title}</span>
										</li>
									))}
								</ul>
								<p className="m-0">
									{/* Let us help you with a roadmap and a plan to reach
									your targeted outcome) */}
									Reach out, and let us cultivate success together.  
								</p>
								<button
									type="button"
									className="cmn-btn btn-fullwidth btn-white mt-40"
								>
									{/* Lets Draw you the plan */}
									Let’s us draw you a strategy plan
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
		// title: "You will need the basic, premium or professional subscription package",
		title: "Get your business noticed, generate leads and win customers.",
	},
	{
		// title: "You will need to sales rep.",
		title: "Help you stand out, connect and scale effortlessly.",
	},
	{
		// title: "You will need one marketing strategist.",
		title: "Help your business grow smarter, with strategic marketing that provide real results.",
	},
	{
		// title: "You will need one coach assistant.",
		title: "Outperform your competitors without the extra bucks.",
	},
];
export default EarningEstimator;
