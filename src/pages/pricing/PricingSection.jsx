import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import ContactSalesForm from "../../components/ContactSalesForm";
import { CaretDown2, CaretUp2 } from "../../components/Icon";
import RangeItem from "../../components/RangeItem";
import BlackDivider from "../about/BlackDivider";
import ShapeViewsTwo from "../service/components/ShapeViewsTwo";
import PlanCard from "./PlanCard";
import PlanFeatureDetails from "./PlanFeatureDetails";
import contactSalesImage from "./img/contactSalesImage.png";
import img from "./img/pricing-bottom.png";
import pricingShape from "./img/pricing-shape.png";
const PricingSection = () => {
	const [yearly, setYearly] = useState(false);
	const [featureOpen, setFeatureOpen] = useState(false);
	const location = useLocation();

	return (
		<>
			<section className="pricing-section pb-0 overflow-hidden">
				<img src={pricingShape} alt="" className="pricing_Shape" />
				<div className="container">
					<div className="pricing-tag">
						{/* Pricing */}
						Packages
						</div>
					<div className="pricing-spacing">
						<div className="section-title mb-0">
							<h2 className="title pb-0 text-base font-xl-57">
								We Offer a Variety of Packages
							</h2>
							<span className="shadow-border my-30px"></span>
							<p className="txt mx-auto" style={{ maxWidth: "1170px" ,fontSize:"14px"}}>
								Eager to meet the needs of any coach we work with, we
								have various price points available to suit your
								business. <br /> You will see a high return on your
								investment, with an increase in clients and inbound
								inquiries as a result of working with us.
							</p>
						</div>
					</div>
				</div>
			</section>
			<ShapeViewsTwo bg="var(--section)">
				<img
					src={img}
					alt=""
					className="service-bottom-shape d-none d-md-block"
				/>
				<div className="container">
					 {/* <div className="section-title-3">
						<div className="left">
							<h2 className="title">CRM Subscriptions</h2>
							<div>No contracts, no surprise fees</div>
						</div>
						<div className="tab-btn-grp">
							<Link
								to="#"
								className={yearly ? "" : "active"}
								onClick={() => setYearly(false)}
							>
								Monthly
							</Link>
							<Link
								to="#"
								className={yearly ? "active" : ""}
								onClick={() => setYearly(true)}
							>
								Yearly
							</Link>
						</div>
					</div> */}

					{/* <RangeItem />
					<br /> */}
					<br className="d-none d-md-block" /> 
					<div className="row g-3 justify-content-center">
						{data?.map((item, i) => (
							<div className="col-lg-3 col-md-6 col-sm-9" key={i}>
								<PlanCard {...item} index={i} yearly={yearly} />
							</div>
						))}
					</div>
				</div>
				{/* {featureOpen && <PlanFeatureDetails />} */}
				<div className="container">
					{/* <div
						className="mx-auto text-center"
						style={{ maxWidth: "520px" }}
					>
						<BlackDivider margin="70px 0 40px" />
						{!featureOpen ? (
							<button
								className="btn-text"
								onClick={() => setFeatureOpen(!featureOpen)}
							>
								See all Features <CaretDown2 />
							</button>
						) : (
							<button
								className="btn-text"
								onClick={() => setFeatureOpen(!featureOpen)}
							>
								Hide all Features <CaretUp2 />
							</button>
						)}
					</div> */}
					{/* <h2 className="font-semibold text-base mb-4">
						{location?.search &&
							location?.search
								.slice(1)
								?.split("-")
								.map(
									(word) =>
										word.charAt(0).toUpperCase() + word.slice(1)
								)
								.join(" ")}
					</h2> */}
					<div className="row align-items-center flex-wrap-reverse">
						<div className="col-lg-6">
							<div style={{ maxWidth: "699px" }}>
								<ContactSalesForm />
							</div>
						</div>
						<div className="col-lg-6 text-center">
							<img src={contactSalesImage}  alt="" />
						</div>
					</div>
				</div>
			</ShapeViewsTwo>
		</>
	);
};

const data = [
	{
		name: "Consulting Pack",
		// price: 0,
		// duration: "yearly",
		txt:"We work with you to develop a complete marketing strategy, live campaign, and functionality testing with your own data",
		subdata: [
			"12 Week Consultation Sessions",
			"Ongoing Email Support",
			"Marketing Growth Plan",
			"Lead Segmentation",
			"SEO Strategy",
			"Email Marketing",
			"Strategic Roadmap",
			"Custom Reporting",
			"Automation Strategies",
			"Lead Magnet  ",
			"Lead Capturing",
			"Lead Nurturing",
			"Social Media Marketing Strategies",
			"2 Marketing Training Blocks",
		],
	},
	{
		name: "Automation Pack",
		// price: 49.99,
		// duration: "yearly",
		txt:"We develop a unique automation system flow that tailored to your business",
		subdata: [
			"Marketing System Setup",
			"Inbound Automation",
			"Sales Funnels",
			"Pipelines",
			"SEO Optimization",
			"Workflows Engineering",
			"Sequence Automation",
			"Reporting Setup",
			"Third Party Integration",
			"Template Setup",
			"Website Development",
			"Landing Pages",
			"Website Optimization",
			"Ongoing Email of Technical Support",
		],
	},
	{
		name: "Complete Inbound Pack",
		// price: 109.99,
		// duration: "yearly",
		txt:"We provide you with a 12 week of consultation and setup your entire backend marketing automation",
		subdata: [
			"12 Week Consulting Sessions",
			"Marketing System Setup",
			"Weekly Status Report",
			"Inbound Strategies + Automation",
			"Sales Funnels Consulting + Design",
			"Pipelines Consulting + Design",
			"SEO Strategies + Optimization ",
			"Workflows Strategies + Engineering",
			"Sequence Automation",
			"Advanced Reporting",
			"Third Party Integration ",
			"Template Setup + Design",
			"Website Development + Consultation",
			"Landing Pages Design",
			"Website Optimization + Revamping",
			"Ongoing Email of Technical Support",
		],
	},
	// {
	// 	name: "Professional",
	// 	// price: 199.99,
	// 	// duration: "yearly",
	// 	subdata: [
	// 		"Lorem ipsum dolor sit",
	// 		"Lorem ipsum dolor sit amet",
	// 		"Lorem ipsum dolor sit",
	// 		"Lorem ipsum",
	// 		"Lorem ipsum dolor sit",
	// 	],
	// },
];

export default PricingSection;
