import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NextIcon, PrevIcon } from "../../../components/Icon";
import BlackDivider from "../../about/BlackDivider";
import img from "../img/consulting-content.png";
const BusinessConsultingContent = () => {
	const ref = useRef();

	return (
		<section className="business-consulting-content">
			<div className="container">
				<div className="position-relative">
					<Swiper
						spaceBetween={24}
						pagination={{ clickable: "true" }}
						modules={[Pagination, Navigation]}
						ref={ref}
					>
						{data?.map((item, i) => (
							<SwiperSlide key={i}>
								<div className="business-consulting-content-wrapper">
									<div className="row g-0">
										<div className="col-lg-6">
											<img
												src={img}
												style={{
													width: "100%",
													height: "100%",
													objectFit: "cover",
													borderRadius: "15px",
												}}
												alt=""
											/>
										</div>
										<div className="col-lg-6 align-self-center">
											<div className="cont">
												<h2 className="title">{item?.title}</h2>
												<p className="txt">{item?.text}</p>
												<Link
													className="cmn-btn btn-white btn-standard"
													to="/sign-up"
												>
													Try it Free
												</Link>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<button
						className="slideNav prev"
						onClick={() => ref.current.swiper.slidePrev()}
					>
						<PrevIcon />
					</button>
					<button
						className="slideNav next"
						onClick={() => ref.current.swiper.slideNext()}
					>
						<NextIcon />
					</button>
				</div>
			</div>
			<BlackDivider margin="80px 0 0" />
		</section>
	);
};

const data = [
	{
		title: "Business Consulting Content",
		text: `Manage all your business operations with a state of the art Client Relational Management software system, integrated with HubSpot and Salesforce to help boost your marketing and sales productivity.`,
	},
	{
		title: "Sales Development",
		text: `Connecting Marketing and Sales Experience with a Business Development Plan to set your business to success. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.`,
	},
	{
		title: "System Integration",
		text: `Connecting Marketing and Sales Experience with a Business Development Plan to set your business to success. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.`,
	},
];

export default BusinessConsultingContent;
