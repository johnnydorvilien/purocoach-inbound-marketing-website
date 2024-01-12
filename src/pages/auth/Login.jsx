import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/img/auth/google.png";
import linkedin from "../../assets/img/auth/linkedin.png";
import sso from "../../assets/img/auth/sso.png";
import { Eye } from "../../components/Icon";
import Input from "../../components/Input";
import AuthLayout from "./AuthLayout";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [submit, setSubmit] = useState(false);
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		setSubmit(true);
		e.preventDefault();
		if (!email) {
			// toast.error("Please enter email address", { id: "auth" });
		} else if (!password) {
			// toast.error("Please enter password", { id: "auth" });
		} else {
			toast.success("Successfully Logged In", { id: "auth" });
			navigate("/");
			setSubmit(false);
		}

		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};

	return (
		<>
			<AuthLayout
				title="Login"
				url="/auth/sign-up"
				altText={`Don't have an account?`}
				buttonText="Sign up"
			>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="d-flex flex-column gap-20px">
						<Input
							placeholder="you@example.com"
							value={email}
							setValue={setEmail}
							label="Email*"
							submit={submit}
							errText="Email is required"
						/>
						<Input
							placeholder="Please enter your password"
							value={password}
							type="password"
							setValue={setPassword}
							label="Password*"
							eye={<Eye />}
							submit={submit}
							errText="Password is required"
						/>
						<Link to="/auth/forget-password" className="forget-pass">
							Forgor password?
						</Link>
						<button type="submit" className="cmn-btn">
							Login
						</button>
						<div className="or">
							<span>Or</span>
						</div>
						<button type="button" className="outline-btn backup-login">
							<img src={sso} alt="" /> <span>Sign in with SSO</span>
						</button>
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

export default Login;
// Abu Raihan Rafuj 01707592756 Mirpur DOHS, Road 09, House 666/668.
