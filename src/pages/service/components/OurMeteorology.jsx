import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { FaqItems } from "../../../components/FaqItems";
import Title from "../../../components/Title";

const OurMeteorology = () => {
	return (
		<>
			<section className="why-choose-us">
				<div className="container">
					<div className="row gy-5">
						<div className="col-lg-6">
							<Title className="text-start" title="Our Meteorology" />
							<div className="title-dark">
								<FaqItems data={data} id="meteorology" />
							</div>
						</div>
						<div className="col-lg-6 ps-xl-5">
							<Title className="text-start" title="Our Results" />
							{/* <div
								className="light-txt mb-3 mb-lg-4"
								style={{ marginTop: "-10px" }}
							>
								Lorem ipsum dolor sit amet consectetur.
							</div> */}
							<SkillItem data={data2} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

const SkillItem = () => {
	const myRef = useRef();
	const { inViewport } = useInViewport(myRef);
	console.log("inViewport", inViewport);
	return (
		<>
			<ul className="skills" ref={myRef}>
				{data2?.map((item, i) => (
					<li className={`skill-item ${inViewport ? "" : "active"}`}>
						<div className="skill-inner">
							<span className="skill-total"></span>
							<span
								className="skill-progress"
								style={{ height: item?.progress }}
							></span>
						</div>
						<div>{item?.title}</div>
						<div>{item?.progress}</div>
					</li>
				))}
			</ul>
		</>
	);
};

const data2 = [
	{
		title: "Attract result",
		progress: "98%",
	},
	{
		title: "Engage result",
		progress: "94%",
	},
	{
		title: "Delight result",
		progress: "88%",
	},
];

const data = [
	{
		title: "a) Attract",
		text: "Increased engagement and a stronger relationship with your clients prior to purchase. By providing trustworthy content, engaging prospect client helps to build a relationship of trust with the customer.",
	},
	{
		title: "b) Engage",
		text: "Increased engagement and a stronger relationship with your clients prior to purchase. By providing trustworthy content, engaging prospect client helps to build a relationship of trust with the customer.",
	},
	{
		title: "c) Delight customer for our clients",
		text: "Increased engagement and a stronger relationship with your clients prior to purchase. By providing trustworthy content, engaging prospect client helps to build a relationship of trust with the customer.",
	},
];

export default OurMeteorology;
