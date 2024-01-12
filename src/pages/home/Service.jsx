import React from "react";
import {
	AutomationIcon2,
	InboundMarketingIcon,
	Integration,
	PieChartIcon,
	Rocket,
	SalesDev,
} from "../../components/Icon";
import Title from "../../components/Title";
// import service from "./img/service.png";
import img from "./img/shape1.png";

const Service = () => {
	return (
		<section className="service-section position-relative">
			<div className="service-section-bg max-b-0"></div>
			<img
				src={img}
				alt=""
				className="service-bottom-shape d-none d-md-block"
			/>
			<div className="container">
				{/* <div className="text-center">
					<img
						src={service}
						className="d-lg-none mw-100 mb-5"
						style={{ width: "280px" }}
						alt=""
					/>
				</div> */}
				<br className="d-lg-none" />
				<br className="d-lg-none" />
				<div className="boost-title">
					<Title
						className="text-base text-start text-md-center shape-full"
						title="All-In-One Stop Shop For All Your Business Needs"
					/>
				</div>
				<div className="row gy-5 gx-4 service-card-wrapper">
					{data?.map((item, i) => (
						<div className="col-sm-6 col-lg-4" key={i}>
							<div className="service-card">
								<div className="icon">{item?.icon}</div>
								<h5 className="title">{item?.title}</h5>
								<p>{item?.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const data = [
	{
		icon: <PieChartIcon />,
		title: "Client Relational Management",
		text: "Power Your Start-Up Forward With a Business Coach.",
	},
	{
		icon: <InboundMarketingIcon />,
		title: "Inbound Marketing",
		text: "As a one-stop-shop for all of your coaching business’ automation and inbound marketing needs, we partner ...",
	},
	{
		icon: <AutomationIcon2 />,
		title: "Automation",
		text: "The perfect automation for your marketing campaigns start here. We are powered by the #1 marketing tool- HubSpot.",
	},
	{
		icon: <Integration />,
		title: "System Integration",
		text: "Streamline and connect data through integration for Better Client Experience.",
	},
	{
		icon: <SalesDev />,
		title: "Sales Development",
		text: "Connecting Marketing and Sales Experience with a Business Development Plan to set your business to success.",
	},
	{
		icon: <Rocket />,
		title: "Business Coaching & Startups",
		text: "Your Partner in Navigating Business Challenges.",
	},
];

export default Service;
