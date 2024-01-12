import React from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/Icon";
import Logo from "../Logo";

const PaymentLayout = ({ children }) => {
	const navigate = useNavigate();
	return (
		<>
			<header>
				<div className="container">
					<div className="header-wrapper">
						<Logo />
					</div>
				</div>
			</header>
			<section className="pricing-section overflow-hidden">
				<span
					style={{
						position: "absolute",
						left: "0",
						top: "-80px",
						zIndex: "3",
					}}
					type="button"
					onClick={() => navigate(-1)}
					className="prev-btn-payment"
				>
					<BackButton />
				</span>
				<div className="payment-section-bg"></div>
				<div className="container">{children}</div>
			</section>
		</>
	);
};

export default PaymentLayout;
