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
							Lorem ipsum dolor sit amet consectetur. Aliquet metus hac
							diam nec amet mus pellentesque leo facilisis. Est mattis
							ornare sit porta lectus eget diam. Metus a sit proin
							adipiscing urna enim at non sed. Luctus in velit duis sed
							adipiscing neque velit. Tortor arcu habitasse convallis id
							cras
						</div>
						<div className="contact-info">
							<div className="item">
								<div className="icon">
									<Pin />
								</div>
								<h5 className="sub-title">Address</h5>
								<div>12, Some Street, 11000 Belgrade, Serbia</div>
							</div>
							<div className="item">
								<div className="icon">
									<Phone />
								</div>
								<h5 className="sub-title">Contact Phone</h5>
								<Link to="Tel:(+381) 11.123.4567">
									(+381) 11.123.4567
								</Link>
							</div>
							<div className="item">
								<div className="icon">
									<Email />
								</div>
								<h5 className="sub-title">Email</h5>
								<Link to="Mailto:PuroCoach@gmail.com">
									PuroCoach@gmail.com
								</Link>
							</div>
						</div>
					</div>
					<div className="banner-thumb">
						<ContactSalesForm />
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
		</section>
	);
};

export default ContactBanner;
