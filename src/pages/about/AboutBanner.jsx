import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import img from "../../assets/img/banner/banner-shape.png";
import bannerImage from "./img/about-banner.png";
const AboutBanner = () => {
	const [open, setOpen] = useState(false);
	return (
		<section className="banner-section about-banner">
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
				<div className="banner-wrapper flex-row">
					<div className="banner-content">
						<h1
							className="title"
							style={{ lineHeight: "1.25", marginBottom: "20px" }}
						>
							About the Company
						</h1>
						<div className="txt">
							Lorem ipsum dolor sit amet consectetur. Suscipit.
						</div>
						<div className="d-none d-sm-block">
							<div className="btn-grp">
								<HashLink className="cmn-btn btn-white" to="#values">
									Our Values
								</HashLink>
							</div>
						</div>

						<div className="btn-grp d-sm-none">
							<Link className="cmn-btn btn-white" to="/trial-signup">
								Start Free Trial
							</Link>
							<button
								type="button"
								className="cmn-btn btn-shade style-2"
								onClick={() => setOpen(!open)}
							>
								Watch a Demo
							</button>
						</div>
					</div>
					<div className="banner-thumb about-thumb">
						<img src={bannerImage} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutBanner;
