import React from "react";
import { QuoteIcon } from "../../components/Icon";
import quoteImg from "./img/quote-img.png";
const QuoteSection = () => {
	return (
		<section className="quote-section">
			<div className="container">
				<div className="row gy-4 align-items-center">
					<div className="col-md-6">
						<div className="quote-image">
							<img src={quoteImg} alt="" />
							<div className="name-area">
								<h6>JOHNNY DORVILIEN</h6>
								<span>Founder & CEO</span>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="ps-xl-4">
							<blockquote className="client-quote">
								<div className="mb-4 pb-xxl-3">
									<QuoteIcon />
								</div>
								<div>
									Johnny is a Master Coach and the Founder of Humane
									Coaching. He is driven by the belief that each person
									– with their dreams in hand – is capable of changing
									the narrative of their own story to lead to greater
									success.
								</div>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default QuoteSection;
