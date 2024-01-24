import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/img/banner/banner-shape.png";
import ContactSalesForm from "../../../components/ContactSalesForm";
import { Email, Phone, Pin } from "../../../components/Icon";

const ContactBanner = () => {
	return (
		<section className="banner-section contact-banner">
			<div
				className="shapes-bg"
				style={{
					WebkitMask: `url(${img}) no-repeat left bottom / cover`,
					opacity: "1",
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="container">
				<div className="banner-wrapper">
					<div className="banner-content">
						<h1
							className="title"
							style={{ lineHeight: "1.25", marginBottom: "20px" }}
						>
							PUROCoach
						</h1>
						<div className="txt">
							<p>Our team can help you think about a business development plan, as well as establishing a long-term growth strategy. We can assess the strengths, weaknesses, opportunities, and threats to your business and come up with a roadmap to address any needs that arise.</p>
							<p>Contact us to learn more about how we can assist with business development.</p>
						</div>
						<div className="contact-info">
							{/* <div className="item">
								<div className="icon">
									<Pin />
								</div>
								<h5 className="sub-title">Address</h5>
								<div>12, Some Street, 11000 Belgrade, Serbia</div>
							</div> */}
							{/* <div className="item">
								<div className="icon">
									<Phone />
								</div>
								<h5 className="sub-title">Contact Phone</h5>
								<Link to="Tel:(+381) 11.123.4567">
									(+381) 11.123.4567
								</Link>
							</div> */}
							<div className="item">
								<div className="icon">
									<Email />
								</div>
								<h5 className="sub-title">Email</h5>
								<Link to="Mailto:PuroCoach@gmail.com">
								support@purocoach.com
								</Link>
							</div>
						</div>
					</div>
					<div className="banner-thumb">
						<ContactSalesForm />
					</div>
				</div>
			</div>
			
		</section>
	);
};

export default ContactBanner;
