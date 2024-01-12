import React from "react";
import { Link } from "react-router-dom";
import { SuccessIcon } from "../../components/Icon";
import AuthLayout from "./AuthLayout";
const SignUpSuccessfull = () => {
	return (
		<>
			<AuthLayout>
				<div className="text-center mx-auto" style={{ maxWidth: "370px" }}>
					<div className="mb-2">
						<SuccessIcon />
					</div>
					<h3
						className="title mb-17 mx-auto"
						style={{ maxWidth: "320px" }}
					>
						Congratulations! You are signed-up.
					</h3>
					<div className="text-sm mb-17">
						Next steps, let's complete your customer onboarding. This will
						take 20 to 30 minutes.
					</div>
					<Link to="#" className="cmn-btn w-100 mb-15">
						Start the onboarding now
					</Link>
					<Link to="#" className="cmn-btn btn-outline w-100">
						Take me to the CRM portal
					</Link>
				</div>
			</AuthLayout>
		</>
	);
};

export default SignUpSuccessfull;
