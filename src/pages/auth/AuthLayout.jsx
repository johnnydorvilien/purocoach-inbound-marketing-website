import React from "react";
import img from "../../assets/img/auth-image.png";
import benifit from "../../assets/img/benifit.png";

import { Link } from "react-router-dom";
import "swiper/css/pagination";
import { ArrowLeft } from "../../components/Icon";
const AuthLayout = ({
	children,
	altText,
	url,
	buttonText,
	className,
	title,
}) => {
	return (
		<main className={`auth-container ${className ? className : ""}`}>
			<section className="left-content">
				<div className="top-bar">
					<Link to="/" className="left">
						<ArrowLeft />
						<span className="d-none d-sm-block">Back to Home page</span>
					</Link>
					<div className="right">
						<span className="alt-txt d-none d-sm-block">
							{altText ? altText : "Already have an account?"}
						</span>
						<Link to={url ? url : "/auth/login"} className="outline-btn">
							{buttonText ? buttonText : "Log in"}
						</Link>
					</div>
				</div>
				<div className="my-auto">
					<div className="content">
						{title && <h3 className="title">{title}</h3>}
						{children}
					</div>
				</div>
			</section>
			<article className="right-content">
				<img src={img} className="top-img" alt="" />
				<div className="my-auto">
					<div className="benifit-item">
						<div className="img">
							<img src={benifit} alt="" />
						</div>
						<div className="cont">
							<h4 className="title">Some sign-in benefits</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Nunc vulputate libero et velit interdum, ac aliquet odio
								mattis.
							</p>
						</div>
					</div>
					{/* <Swiper
						slidesPerView={1}
						modules={[Pagination]}
						pagination={{ clickable: true }}
					>
						{data?.map(({ title, text }, i) => (
							<SwiperSlide key={i}>
								<div className="benifit-item">
									<div className="img">
										<img src={benifit} alt="" />
									</div>
									<div className="cont">
										<h4 className="title">{title}</h4>
										<p>{text}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper> */}
				</div>
			</article>
		</main>
	);
};

// const data = [
// 	{
// 		title: "Some sign-in benefits",
// 		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
// 	},
// 	{
// 		title: "Some sign-in benefits",
// 		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
// 	},
// 	{
// 		title: "Some sign-in benefits",
// 		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
// 	},
// 	{
// 		title: "Some sign-in benefits",
// 		text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
// 	},
// ];

export default AuthLayout;
