import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";
import AuthLayout from "./AuthLayout";
const EmailVerify = () => {
	const [code, setCode] = useState("");
	const navigate = useNavigate();
	const [error, setError] = useState(false);
	console.log("code", code);
	const handleSubmit = (e) => {
		setError(true);
		e.preventDefault();
		if (code?.toString().length < 6) {
			toast.error("Please enter verification code", { id: "auth" });
		} else {
			toast.success("Successfully Create new account", {
				id: "auth",
			});
			navigate("/auth/signup-succeed");
		}
		setTimeout(() => {
			setError(false);
		}, 1200);
	};
	const handleSubmit2 = () => {
		setError(true);
		if (code?.toString().length >= 5) {
			toast.success("Successfully Create new account", {
				id: "auth",
			});
			navigate("/auth/signup-succeed");
		}
		setTimeout(() => {
			setError(false);
		}, 1200);
	};

	return (
		<>
			<AuthLayout title="Email Verification" className="email-verification">
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="d-flex flex-column gap-20px">
						<div className="text">
							We sent a 6 digit security code to the email provided.
							Please double check spam folders
						</div>
						<VerificationInput
							value={code}
							onChange={(value) => setCode(value)}
							placeholder=""
							onComplete={handleSubmit2}
						/>
						{error && (
							<span className="err-text">
								Please Enter your verification code
							</span>
						)}
						<span className="resend-code text-base">Resend code</span>
						<button type="submit" className="cmn-btn">
							Verify
						</button>
					</div>
				</form>
			</AuthLayout>
		</>
	);
};

export default EmailVerify;
