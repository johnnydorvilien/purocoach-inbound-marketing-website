import React from "react";
import { Link } from "react-router-dom";
import { SuccessIcon } from "../../components/Icon";
import PaymentLayout from "./PaymentLayout";

const PaymentComplete = () => {
	return (
		<PaymentLayout>
			<div className="pricing-spacing">
				<br />
				<br />
				<br className="d-none d-sm-block" />
				<div
					className="shadow--card text-center mx-auto px-4 px-md-5 pb-4 pb-md-40"
					style={{ maxWidth: "718px" }}
				>
					<div
						style={{
							transform: "translateY(-50px)",
							marginBottom: "-20px",
						}}
					>
						<SuccessIcon />
					</div>
					<h3 className="title mb-30 mx-auto text-base">
						Payment Complete!
					</h3>
					<div className="mb-17 font-16 text-title">
						Lorem ipsum dolor sit amet consectetur. Eu sed amet neque
						ultrices. Ut imperdiet arcu neque pellentesque.
					</div>
					<br />
					<div className="mx-auto" style={{ maxWidth: "423px" }}>
						<Link to="#" className="cmn-btn w-100 btn-standard mb-15">
							Start the onboarding now
						</Link>
						<div className="or my-2 my-sm-4">
							<span>Or</span>
						</div>
						<Link
							to="#"
							className="cmn-btn btn-outline btn-standard w-100"
						>
							Take me to the CRM portal
						</Link>
					</div>
				</div>
			</div>
		</PaymentLayout>
	);
};

export default PaymentComplete;
