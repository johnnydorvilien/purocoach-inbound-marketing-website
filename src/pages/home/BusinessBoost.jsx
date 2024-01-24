import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaretDown3 } from "../../components/Icon";
import Title from "../../components/Title";
import useScreen from "../../hooks/useScreen";
import callbg from "./img/call-bg.png";
import consult from "./img/consulting-img.png";
import shape from "./img/shape.png";
import img from "./img/shape1.png";
const BusinessBoost = () => {
	const [tab, setTab] = useState("Business Consulting");
	const screen = useScreen();
	return (
		<>
			<section className="partner-with-us">
				<div className="feature-bg"></div>
				<img
					src={shape}
					className="top-right-shape d-none d-sm-block"
					alt=""
				/>
				<img
					src={shape}
					className="top-right-shape w-50 d-sm-none"
					alt=""
				/>
				<img
					src={img}
					alt=""
					className="service-bottom-shape d-md-none w-50"
				/>
				<div className="container" style={{paddingTop:"100px",paddingBottom:"0"}}>
					<div className="boost-title">
						<Title
							title="Our Process"
							className="text-white text-start text-md-center"
						/>
					</div>
					<p className="s-txt">
					It all starts with attracting the right customers, who you then work to convert, close, and delight. Learn how our 4 step process can help connect your business with the right customers at the right time.
					</p>
				</div>
				<ul className="boost-tab-menu">
					<li>
						<button
							className={tab == "Business Consulting" ? "active" : ""}
							type="button"
							onClick={() => setTab("Business Consulting")}
						>
							1. Discovery & Exploration
						</button>
					</li>
					<li>
						<button
							className={tab == "Strategy Planning" ? "active" : ""}
							type="button"
							onClick={() => setTab("Strategy Planning")}
						>
							2. Planning Strategies
						</button>
					</li>
					<li>
						<button
							className={tab == "Market Analysis" ? "active" : ""}
							type="button"
							onClick={() => setTab("Market Analysis")}
						>
						    3. Execute & Automate
						</button>
					</li>
					<li>
						<button
							className={tab == "Business Strategy" ? "active" : ""}
							type="button"
							onClick={() => setTab("Business Strategy")}
						>
							4. Test & Finalyse
						</button>
					</li>
				</ul>
				<div className="container">
					{screen < 768 ? (
						<>
							<TabItem title="Business Consulting" openmenu="true" />

							<TabItem title="Strategy Planning" />

							<TabItem title="Market Analysis" />

							<TabItem title="Business Strategy" />
						</>
					) : (
						<>
							{tab == "Business Consulting" && (
								<TabItem title="Business Consulting" openmenu="true" />
							)}
							{tab == "Strategy Planning" && (
								<TabItem title="Strategy Planning" />
							)}
							{tab == "Market Analysis" && (
								<TabItem title="Market Analysis" />
							)}
							{tab == "Business Strategy" && (
								<TabItem title="Business Strategy" />
							)}
						</>
					)}
				</div>
			</section>
		</>
	);
};
const TabItem = ({ title, openmenu }) => {
	const [open, setOpen] = useState(openmenu);
	return (
		<>
			<div className="boost-wrapper">
				<h4
					className={`m-title d-flex d-md-none justify-content-between align-items-center text-white mb-3 ${
						open ? "open" : ""
					}`}
					onClick={() => setOpen(!open)}
				>
					<span>{title} </span>
					<span style={{ width: "20px" }}>
						<CaretDown3 color="#fff" />
					</span>
				</h4>
				<div className={`${open ? "" : "d-none d-md-block"}`}>
					<div className="row g-4">
						<div className="col-xl-6">
							<div className="about--company">
								<img src={consult} alt="" />
								<div className="statement-left">
									<h5>Requirement Gathering</h5>
									<p>
										The purpose of the discovery is to discover your desired outcome from your consulting services block which help us to craft a practical approach to achieve your business goal. This discovery phase entails uncovering your needs, challenges, and the results you desire for your business. 
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="statement-wrapper">
								<div className="cont">
									<h5 className="subtitle">The Agenda:</h5>
									<ul>
										<li>We listen</li>
										<li>We get to know your business well</li>
										<li>We uncover key pain points</li>
										<li>We ask questions to gain understanding</li>
										<li>We define and set key smart goals</li>
										<li>We break goals into small chunks and set deadlines</li>
									</ul>
								</div>
								<div
									className="statement-right"
									style={{
										background: `url(${callbg}) no-repeat center center / cover`,
									}}
								>
									<h4 >
										We're one call away!
									</h4>
									<Link
										to="#"
										className="cmn-btn"
										style={{
											background: "#73B9EF",
											borderColor: "#73B9EF",
											color: "#fff",
											padding: "5px 14px",
											fontSize: "13px"
										}}
									>
										Schedule a Discovery call
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default BusinessBoost;
