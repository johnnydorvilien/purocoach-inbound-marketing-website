import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Filter, Info, Message, Speaker } from "../../components/Icon";
import partner2 from "./img/how-we-work.png";
import partner from "./img/partner.png";
import shape from "./img/shape.png";
const PartnerWithUs = () => {
	return (
		<>
			<section className="partner-with-us">
				<div className="feature-bg"></div>
				<img
					src={shape}
					className="top-right-shape d-none d-sm-block"
					alt=""
				/>
				<div className="container">
					<div className="row align-items-center gy-4">
						<div className="col-lg-6">
							<div className="partner-content text-white">
								<h2
									className="title text-white"
									style={{ maxWidth: "525px" }}
								>
									Partner With Us to Build Your Business
								</h2>
								<p className="text" style={{ maxWidth: "625px" }}>
									Work with us to achieve your goals, take the next
									step in your coaching career, and focus your time on
									your clients.
								</p>
								<div className="d-flex">
									<Link
										to="#partnerWithUs"
										data-bs-toggle="modal"
										className="cmn-btn btn-white"
									>
										Work with Us
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<img src={partner} className="w-100 rounded-15" alt="" />
						</div>
					</div>
					<div className="divider-white"></div>
					<div className="row align-items-center gy-4">
						<div className="col-lg-6 pe-xm-5">
							<img
								src={partner2}
								className="w-100 rounded-15 pe-4"
								alt=""
							/>
						</div>
						<div className="col-lg-6">
							<div className="partner-content text-white">
								<h2
									className="title text-white mb-25"
									style={{ maxWidth: "525px" }}
								>
									How We Work
								</h2>
								<p className="text" style={{ maxWidth: "625px" }}>
									Lorem ipsum dolor sit amet, adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore.
								</p>
								<ul className="info">
									{data?.map((item, i) => (
										<li key={i}>
											<span className="icon">{item?.icon}</span>
											<span>{item?.title}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Who we are */}
			<div
				className="modal fade"
				id="partnerWithUs"
				tabindex="-1"
				aria-labelledby="partnerWithUs"
				aria-hidden="true"
				style={{
					"--bs-modal-width": "625px",
				}}
			>
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header align-items-start border-0">
							<h5 className="modal-title mb-4">Who We Are</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								style={{ filter: "invert(1)" }}
							></button>
						</div>
						<div className="modal-body pe-3 pe-sm-4">
							<div className="item">
								<h6 className="subtitle">1 Step</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur. Consectetur
									urna in scelerisque amet ac dignissim. Hac pretium
									facilisis id vestibulum scelerisque eget eleifend
									lobortis. In sed dignissim pharetra integer. Vel quam
									vel amet diam. In accumsan commodo natoque netus
									pellentesque enim viverra.
								</p>
							</div>
							<div className="item">
								<h6 className="subtitle">2 Step</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur. Consectetur
									urna in scelerisque amet ac dignissim. Hac pretium
									facilisis id vestibulum scelerisque eget eleifend
									lobortis. In sed dignissim pharetra integer. Vel quam
									vel amet diam. In accumsan commodo natoque netus
									pellentesque enim viverra. Lorem ipsum dolor sit amet
									consectetur. Consectetur urna in scelerisque amet ac
									dignissim. Hac pretium facilisis id vestibulum
									scelerisque eget eleifend lobortis. In sed dignissim
									pharetra integer. Vel quam vel amet diam. In accumsan
									commodo natoque netus pellentesque enim viverra.
								</p>
							</div>
							<div className="item">
								<h6 className="subtitle">3 Step</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur. Consectetur
									urna in scelerisque amet ac dignissim. Hac pretium
									facilisis id vestibulum scelerisque eget eleifend
									lobortis. In sed dignissim pharetra integer. Vel quam
									vel amet diam. In accumsan commodo natoque netus
									pellentesque enim viverra.
								</p>
							</div>
							<div className="item">
								<h6 className="subtitle">4 Step</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur. Consectetur
									urna in scelerisque amet ac dignissim. Hac pretium
									facilisis id vestibulum scelerisque eget eleifend
									lobortis. In sed dignissim pharetra integer. Vel quam
									vel amet diam. In accumsan commodo natoque netus
									pellentesque enim viverra.
								</p>
							</div>
							<div className="item">
								<h6 className="subtitle">5 Step</h6>
								<p>
									Lorem ipsum dolor sit amet consectetur. Consectetur
									urna in scelerisque amet ac dignissim. Hac pretium
									facilisis id vestibulum scelerisque eget eleifend
									lobortis. In sed dignissim pharetra integer. Vel quam
									vel amet diam. In accumsan commodo natoque netus
									pellentesque enim viverra.
								</p>
							</div>
						</div>
						<div className="modal-footer border-0 pe-3 pe-sm-4">
							<div
								className="btn-grp w-100 d-flex gap-3"
								data-bs-dismiss="modal"
							>
								<HashLink
									to="/#request-demo"
									className="cmn-btn btn-white btn-standard flex-grow-1 w-0"
								>
									Connect with Us Now
								</HashLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const data = [
	{
		icon: <Message />,
		title: "We are humanitarians, motivators, and entrepreneurs",
	},
	{
		icon: <Speaker />,
		title: "Our solutions are designed to work with you",
	},
	{
		icon: <Filter />,
		title: "Traditional methods of doing business change almost daily",
	},
	{
		icon: <Info />,
		title: "Our team of dedicated leaders, managers and consultants",
	},
];

export default PartnerWithUs;
