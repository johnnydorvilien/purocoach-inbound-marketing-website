import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import img from "../../assets/img/banner/banner-shape.png";
import bannerImage from "../../assets/img/banner/banner-thumb.png";
import { VideoIcon } from "../../components/Icon";
import useScreen from "../../hooks/useScreen";
import BannerVideo from "./BannerVideo";
import bannerMan from "./img/banner-man.png";
const Banner = () => {
	const [open, setOpen] = useState(false);
	const screen = useScreen();
	return (
		<>
			<section className="banner-section">
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
				<Swiper
					slidesPerView={1}
					effect={"fade"}
					modules={[EffectFade, Pagination]}
					pagination={{ clickable: true }}
					className="swiper-overflow-hidden"
				>
					{data?.map((item, i) => (
						<SwiperSlide key={i}>
							<div className="container">
								<div className="banner-wrapper">
									<div className="banner-content">
										<h1 className="title">The #1 CRM</h1>
										<h2 className="subtitle">
											Platform for{" "}
											<span style={{ color: "#FEC15A" }}>
												Coaches
											</span>
										</h2>
										<div className="txt">{item?.txt}</div>
										<BtnGrp open={open} setOpen={setOpen} />
									</div>
									<div className="banner-thumb">
										<img
											src={screen >= 576 ? bannerImage : bannerMan}
											alt=""
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<BannerVideo open={open} setOpen={setOpen} />
		</>
	);
};
export const BtnGrp = ({ open, setOpen }) => {
	return (
		<>
			<div className="btn-grp">
				<Link className="cmn-btn btn-white" to="/trial-signup">
					Start Free Trial
				</Link>
				<button
					type="button"
					className="cmn-btn btn-shade"
					onClick={() => setOpen(!open)}
				>
					<VideoIcon /> Watch a Demo
				</button>
			</div>
		</>
	);
};

const data = [
	{
		txt: "We run the engine that drives your coaching business",
	},
	{
		txt: "lorem ipsum dolor ",
	},
];

export default Banner;