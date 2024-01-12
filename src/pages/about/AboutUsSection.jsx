import React from "react";

import { Link } from "react-router-dom";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img from "./img/about-shape.png";

const AboutUsSection = () => {
	return (
		<>
			<section className="about-section">
				<div className="service-section-bg"></div>
				<img
					src={img}
					alt=""
					className="service-bottom-shape d-none d-md-block"
				/>
				<div className="container">
					<div className="d-flex flex-column gap-50px">
						{data?.map((item, i) => (
							<div className="about-item" key={i}>
								<div className="about-item-img">
									<img src={item?.img} alt="" />
								</div>
								<div className="about-item-cont">
									<div className="cont">
										<h2 className="title">{item?.title}</h2>
										<p className="txt">{item?.text}</p>
										<div className="d-flex">
											<Link
												to="/services?goback"
												className="cmn-btn"
											>
												Explore Our Services
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

const data = [
	{
		img: img1,
		title: "Who We Are",
		text: "Coaching is a powerful tool to overcome life obstacles. Coaches are guides – thoughtful and empathetic listeners ready to assist and encourage their clients. At Humane Coaching, we champion this important work and pride ourselves on providing opportunities for coaches to focus on their clients. We offer marketing strategy, business coaching, and business consulting for coaches in health & wellness, finance, career, relationships, leadership, and more.",
	},
	{
		img: img3,
		title: "Our Mission",
		text: "By motivating coaches to start or grow their businesses, we help each client follow their calling and pursue their passion. We know the importance of coaching people in personal development and believe everyone can benefit from a coach. Therefore, we are driven to inspire current and future coaches who seek to help others to unleash their full potential and become their best self.",
	},
	{
		img: img2,
		title: "Our Vision",
		text: "We want to see coaches gradually shift into prioritizing their true passion—unlocking their clients’ potential. We envision an industry where the bar is raised, and every coach can serve with excellence. Humane Coaching is just one part of a greater chain reaction of helping others. We operate on seven core values: people, authenticity, integrity, diversity, excellence, innovation, and togetherness.",
	},
];

export default AboutUsSection;
