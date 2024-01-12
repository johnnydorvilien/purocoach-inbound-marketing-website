import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Select from "./Select";

const ContactSalesForm = () => {
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [service, setService] = useState("");
	const [submit, setSubmit] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		if (!name) {
			// toast.error("Please Enter a name");
		} else if (!email) {
			// toast.error("Please Enter an email address");
		} else if (!phone) {
			// toast.error("Please Enter a phone");
		} else if (!service) {
			// toast.error("Please Select a service");
		} else if (!message) {
			// toast.error("Please Enter message");
		} else {
			toast.success("Message Sent");
			navigate("/payment");
			setSubmit(false);
		}
		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};

	return (
		<>
			<div className="contact-sales-form-wrapper">
				<h4 className="title text-base" style={{ fontWeight: "600" }}>
					Contact Sales
				</h4>
				<p>Don’t throw your future away.</p>
				<form onSubmit={handleSubmit}>
					<div className="d-flex flex-column gap-25px">
						<Input
							placeholder="Name"
							value={name}
							setValue={setName}
							submit={submit}
							errText={"Please Enter a name"}
						/>
						<Input
							placeholder="Email"
							value={email}
							setValue={setEmail}
							submit={submit}
							errText={"Please Enter an email address"}
						/>
						<Input
							placeholder="Phone"
							value={phone}
							setValue={setPhone}
							submit={submit}
							errText={"Please Enter a phone"}
						/>
						<Select
							value={service}
							setValue={setService}
							data={data}
							submit={submit}
							errText={"Please Enter a service"}
						/>
						<Input
							textarea
							placeholder="Message"
							height="192px"
							value={message}
							setValue={setMessage}
							submit={submit}
							errText={"Please Enter a message"}
						/>
						<button type="submit" className="cmn-btn">
							Send
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

const data = [
	{
		title: "Select service",
		value: "",
	},
	{
		title: "Inbound Marketing",
		value: "Inbound Marketing",
	},
	{
		title: "Sales Development",
		value: "Sales Development",
	},
	{
		title: "Automation",
		value: "Automation",
	},
	{
		title: "Client Relational Management",
		value: "Client Relational Management",
	},
	{
		title: "System Integration",
		value: "System Integration",
	},
	{
		title: "Business Coaching & Startups",
		value: "Business Coaching & Startups",
	},
];
export default ContactSalesForm;
