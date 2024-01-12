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
				<div className="section-title mb-60">
					<h2 className="title title-xl-title text-start text-sm-center text-base pb-0">
						<InboundMarketingIcon /> {title || "Inbound Marketing"}
					</h2>
				</div>
				<div className="row gy-5 flex-wrap-reverse">
					<div className="col-lg-6">
						<div className="me-xl-4 pe-xl-3">
							<img src={img} className="__rounded-img" alt="" />
						</div>
					</div>
					<div className="col-lg-6">
						<div>
							<p className="light-txt mb-4">
								Lorem ipsum dolor sit amet consectetur. Egestas felis et
								praesent proin scelerisque velit. Quis dolor enim
								bibendum vel placerat nisl leo faucibus suspendisse.
							</p>
							<p className="light-txt mb-4">
								Etiam arcu est nam adipiscing diam interdum consectetur.
								A turpis egestas molestie tellus mauris lacus. Amet arcu
								eget semper luctus fermentum blandit ut semper et.
								Pellentesque urna volutpat posuere donec est.
							</p>
							<br className="d-none d-sm-block" />
							<button
								className="cmn-btn btn-standard"
								style={{ minWidth: "273px" }}
								onClick={() => setOpen(!open)}
							>
								Watch Demo
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
