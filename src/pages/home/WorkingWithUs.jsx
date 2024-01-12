import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import VideoPlayIcon from "../../components/VideoPlayIcon";
import useScreen from "../../hooks/useScreen";
import BannerVideo from "./BannerVideo";
import workingWithUs from "./img/working-with-us.png";
const WorkingWithUs = () => {
	const [open, setOpen] = useState(false);
	const screen = useScreen();
	return (
		<>
			<section className="trusted-crm-section crm-trusted-2">
				<div className="container">
					<div className="boost-title">
						<div className="section-title m-0">
							<h2 className="title text-base text-start text-md-center text-xl font-semibold pb-max-md-2">
								Working With Us
							</h2>
						</div>
					</div>
					<div className="row align-items-center gy-4">
						<div className="col-lg-6">
							<div
								className="working-img"
								onClick={() => setOpen(!open)}
							>
								<img src={workingWithUs} className="mw-100" alt="" />
								<div className="icon">
									<VideoPlayIcon />
								</div>
							</div>
						</div>
						<div className="col-lg-6 ps-xl-4">
							<div className="crm-content">
								<p className="text">
									Lorem ipsum dolor sit amet consectetur. Egestas felis
									et praesent proin scelerisque velit. Quis dolor enim
									bibendum vel placerat nisl leo faucibus suspendisse.
								</p>
								<p className="text">
									Etiam arcu est nam adipiscing diam interdum
									consectetur. A turpis egestas molestie tellus mauris
									lacus. Amet arcu eget semper luctus fermentum blandit
									ut semper et. Pellentesque urna volutpat posuere
									donec est.
								</p>
								<div className="d-flex flex-wrap gap-3 __crm-btn-grp">
									<HashLink
										to="/#request-demo"
										className="cmn-btn"
										style={{
											maxWidth: "238px",
											width: "100%",
											height: "60px",
											minHeight: "57px",
											alignItems: "center",
										}}
									>
										{screen < 575 ? "Learn More" : "Get in Touch"}
									</HashLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<BannerVideo contactButton open={open} setOpen={setOpen} />
		</>
	);
};

export default WorkingWithUs;
