import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import google from "../../assets/img/auth/google.png";
import linkedin from "../../assets/img/auth/linkedin.png";
import Input from "../../components/Input";
import AuthLayout from "./AuthLayout";
const SignUp = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const [submit, setSubmit] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		if (!email) {
			// toast.error("Please enter email address", { id: "auth" });
		} else {
			toast.success("Email Successfull, Please Create a new Password", {
				id: "auth",
			});
			navigate("/auth/create-password");
			setSubmit(false);
		}
		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};

	return (
		<>
			<AuthLayout title="Sign-up">
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="d-flex flex-column gap-20px">
						<Input
							placeholder="you@example.com"
							value={email}
							setValue={setEmail}
							label="Email*"
							submit={submit}
							errText="Please enter a new email address"
						/>
						<button type="submit" className="cmn-btn">
							Continue
						</button>
						<div className="or">
							<span>Or</span>
						</div>
						<button type="button" className="outline-btn backup-login">
							<img src={google} alt="" />{" "}
							<span>Sign in with Google</span>
						</button>
						<button type="button" className="outline-btn backup-login">
							<img src={linkedin} alt="" />{" "}
							<span>Sign in with Linkedin</span>
						</button>
					</div>
				</form>
			</AuthLayout>
		</>
	);
};

export default SignUp;
