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
				<div className="container">
					<div className="boost-title">
						<Title
							title="Start Boosting Your Business Today!"
							className="text-white text-start text-md-center"
						/>
					</div>
					<p className="s-txt">
						Whether you are just starting out in your coaching career, or
						you have grown a steady business and see yourself looking for
						more, we are ready to partner with you. With technical
						knowledge across various
					</p>
				</div>
				<ul className="boost-tab-menu">
					<li>
						<button
							className={tab == "Business Consulting" ? "active" : ""}
							type="button"
							onClick={() => setTab("Business Consulting")}
						>
							Business Consulting
						</button>
					</li>
					<li>
						<button
							className={tab == "Strategy Planning" ? "active" : ""}
							type="button"
							onClick={() => setTab("Strategy Planning")}
						>
							Strategy Planning
						</button>
					</li>
					<li>
						<button
							className={tab == "Market Analysis" ? "active" : ""}
							type="button"
							onClick={() => setTab("Market Analysis")}
						>
							Market Analysis
						</button>
					</li>
					<li>
						<button
							className={tab == "Business Strategy" ? "active" : ""}
							type="button"
							onClick={() => setTab("Business Strategy")}
						>
							Business Strategy
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
								<div className="cont">
									<h5 className="subtitle">About Company</h5>
									<ul>
										<li>Explore Our Consultancy Services</li>
										<li>Finest Consultant Experts</li>
										<li>Our Mission Statement</li>
										<li>Business Work Principles</li>
										<li>Company Carrer Oportunities</li>
										<li>Finest Consultant Team</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="statement-wrapper">
								<div className="statement-left">
									<h5>Our Mission Statement</h5>
									<p>
										Sed ut perspiciatis unde omnis iste natus error
										sit voluptatem accusantium remque laudantium,
										totam rem aperiam, eaque ipsa quae ab illo
										inventore veritatis et quasi architecto beatae
										vitae dicta.
									</p>
									<Link to="#" className="cmn-btn btn-white text-base">
										Explore Our Services
									</Link>
								</div>
								<div
									className="statement-right"
									style={{
										background: `url(${callbg}) no-repeat center center / cover`,
									}}
								>
									<h4>
										Our Call Center <br /> (555) 789 6754
									</h4>
									<Link
										to="#"
										className="cmn-btn"
										style={{
											background: "#73B9EF",
											borderColor: "#73B9EF",
											color: "#fff",
										}}
									>
										Explore Our Services
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
