import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Eye } from "../../components/Icon";
import Input from "../../components/Input";
import AuthLayout from "./AuthLayout";
const CreatePassword = () => {
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const navigate = useNavigate();
	const [submit, setSubmit] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		if (!password) {
			// toast.error("Please enter password", { id: "auth" });
		} else if (password != confirm) {
			// toast.error("Password dosen't match", { id: "auth" });
			setSubmit(true);
		} else {
			toast.success("Password created successful", {
				id: "auth",
			});
			navigate("/auth/email-verify");
			password === confirm && setSubmit(false);
		}
		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};

	return (
		<>
			<AuthLayout title="Create a new password">
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="d-flex flex-column gap-20px">
						<Input
							placeholder="Please create your new password"
							value={password}
							type="password"
							setValue={setPassword}
							label="Password*"
							eye={<Eye />}
							submit={submit}
							errText="Enter new password"
						/>
						<Input
							placeholder="Please create your new password"
							value={confirm}
							type="password"
							setValue={setConfirm}
							label="Retype Password*"
							eye={<Eye />}
							submit={submit}
							errText="Confirm Password is required"
							newErr={
								password != confirm ? "Password dosen't match" : ""
							}
						/>
						<button type="submit" className="cmn-btn">
							Continue
						</button>
					</div>
				</form>
			</AuthLayout>
		</>
	);
};

export default CreatePassword;
