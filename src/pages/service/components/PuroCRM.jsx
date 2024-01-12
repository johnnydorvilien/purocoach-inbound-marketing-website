import React from "react";
import { Link } from "react-router-dom";
import img from "../img/puro-crm.png";
const PuroCRM = () => {
	return (
		<section className="puro-crm-section">
			<div className="target-id" id="crm"></div>
			<div className="container">
				<div className="row gy-5 align-items-center">
					<div className="col-lg-6">
						<div className="crm-txt text-white">
							<h2 className="title text-white">PUROCoach CRM</h2>
							<p>
								Stay Organised with Online Customer Relationship
								Management (CRM)
							</p>
							<p>
								A CRM Web/Mobile application as an All-in-One Platform
								that helps coaches organise and manage their entire
								business operations on the go. 
							</p>
							<Link
								className="cmn-btn btn-white"
								to="/pricing"
								style={{ minWidth: "233px" }}
							>
								See Pricing
							</Link>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="ps-xl-4">
							<img src={img} alt="" className="__rounded-img" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PuroCRM;
