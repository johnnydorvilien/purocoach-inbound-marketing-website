import React, { useState } from "react";
import { InboundMarketingIcon } from "../../../components/Icon";
import BannerVideo from "../../home/BannerVideo";
import img from "../img/inbound.png";
const InboundMarketingSection = ({ title }) => {
	const [open, setOpen] = useState(false);
	return (
		<section className="inbound-marketing-section">
			<div className="target-id" id="inbounding"></div>
			<div className="container">
				
				<div className="row gy-5 flex-wrap-reverse">
					<div className="col-lg-6">
						<div className="me-xl-4 pe-xl-3">
							<img src={img} className="__rounded-img" alt="" />
						</div>
					</div>
					<div className="col-lg-6">
						<div>
							<div className="section-title ">
								<h2 className="title  text-start  text-base pb-0">
									 {title || "KPI Performance"}
								</h2>
							</div>
							<p className="light-txt mb-4">
								We love when people say “work with PUROCoach, 
								they’re good people.” In a way it’s our superpower. 
								That, and our years of experience developing unique 
								and successful solutions to a myriad of marketing and advertising problems.
							</p>
							<p className="light-txt mb-4">
								We’re just the right size to stay nimble in 
								both our approach and how we align our team 
								to meet your needs. So, when the inevitable 
								marketing priority change happens, we easily change right alongside you.  
							</p>
							<br className="d-none d-sm-block" />
							<button
								className="cmn-btn btn-standard"
								style={{ minWidth: "273px" }}
								onClick={() => setOpen(!open)}
							>
								Talk with us!
							</button>
						</div>
					</div>
				</div>
			</div>
			<BannerVideo open={open} setOpen={setOpen} />
		</section>
	);
};

export default InboundMarketingSection;
