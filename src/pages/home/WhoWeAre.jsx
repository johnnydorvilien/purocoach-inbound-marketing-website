import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { AngleRight } from "../../components/Icon";
import Title from "../../components/Title";
import img from "./img/shape1.png";
const WhoWeAre = () => {
	const navigate = useNavigate();
	return (
		<>
			<section className="service-section position-relative who-we-are">
				<div className="service-section-bg"></div>
				<img src={img} alt="" className="service-bottom-shape" />
				<div className="container">
					<div className="boost-title">
						<Title
							className="text-base text-start text-md-center"
							title="Learn More About How We Can Help You"
						/>
					</div>
					<div className="row gy-5">
						{data?.map((item, i) => (
							<div className="col-md-4" key={i}>
								<div className="who-we-are-item">
									<h4 className="subtitle">{item?.title}</h4>
									{item?.text?.map((txt, j) => (
										<p key={j}>{txt}</p>
									))}
									<Link
										to="#whoWeAre"
										data-bs-toggle="modal"
										className="text-base read-more"
									>
										View More <AngleRight />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Who we are */}
			<div
				className="modal fade"
				id="whoWeAre"
				tabindex="-1"
				aria-labelledby="whoWeAre"
				aria-hidden="true"
				style={{
					"--bs-modal-width": "625px",
				}}
			>
				<div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header align-items-start border-0">
							<h5 className="modal-title mb-4">Connect with Us</h5>
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
							<div className="btn-grp w-100 d-flex gap-3">
								<button
									className="cmn-btn btn-white btn-standard flex-grow-1 w-0"
									data-bs-dismiss="modal"
									onClick={() =>
										setTimeout(() => {
											navigate("/trial-signup");
										}, 100)
									}
								>
									Request a Free Demo
								</button>
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
		title: "Who We Are?",
		text: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
		],
	},
	{
		title: "Who We Do?",
		text: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
		],
	},
	{
		title: "Who We Do?",
		text: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
		],
	},
];

export default WhoWeAre;
