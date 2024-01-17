import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { toast } from "react-hot-toast";
import { Rocket } from "../../../components/Icon";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import img from "../img/business-startup.png";
import img1 from "../img/partners/1.png";
import img2 from "../img/partners/2.png";
import img3 from "../img/partners/3.png";
import img4 from "../img/partners/4.png";
const BusinessStartups = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [service, setService] = useState("Large Enterprise");
	const [message, setMessage] = useState("");

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (!name) {
	// 		toast.error("Please Enter a name");
	// 	} else if (!email) {
	// 		toast.error("Please Enter an email address");
	// 	} else if (!service) {
	// 		toast.error("Please Select a service");
	// 	} else if (!message) {
	// 		toast.error("Please Enter message");
	// 	} else {
	// 		toast.success("Message Sent");
	// 	}
	// };

	const [submit, setSubmit] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		if (!name) {
			// toast.error("Please Enter a name");
		} else if (!email) {
			// toast.error("Please Enter an email address");
		} else if (!service) {
			// toast.error("Please Select a service");
		} else if (!message) {
			// toast.error("Please Enter message");
		} else {
			toast.success("Message Sent");
			setSubmit(false);
		}
		setTimeout(() => {
			setSubmit(false);
		}, 1200);
	};

	return (
		<section className="business-startup-section">
			<div className="service-section-bg"></div>
			<img
				src={img}
				alt=""
				className="service-bottom-shape d-none d-md-block"
			/>
			<div className="container">
				<div className="section-title mb-60">
					<h2 className="title title-xl-title text-start text-sm-center text-base pb-0">
						{/* <Rocket /> Business Startups */}
						<Rocket />Power Your Start-Up Forward With a Business Coach
					</h2>
				</div>
				<div className="row g-3">
					<div className="col-lg-4">
						<div className="contact-sales-form-wrapper">
							<h4 className="title" style={{fontSize:"25px"}}>Contact Sales</h4>
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
										height="100%"
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
					</div>
					<div className="col-lg-8">
						<div className="row g-3">
							<div className="col-sm-6">
								<div className="small-shadow-card">
									<h4 className="title" style={{fontSize:"25px"}}>How it works?</h4>
									<p style={{fontSize:"14px"}}>
										Lorem ipsum dolor sit amet consectetur. At lacus
										egestas sed aliquam auctor. Sapien morbi non risus
										lacus risus posuere.
									</p>
									<p style={{fontSize:"14px"}}>
										Neque fringilla nisl est id interdum ac ut. Rutrum
										fringilla pellentesque augue faucibus ridiculus.
										Ac magna mi duis amet potenti integer. Amet urna
										elit felis vulputate ante amet lorem tortor. Odio
										nulla venenatis laoreet amet nisi orci.
										Suspendisse vitae et morbi sed rutrum habitasse
										risus. Odio odio in turpis
									</p>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="small-shadow-card">
									<h4 className="title" style={{fontSize:"25px"}}>What to do?</h4>
									<p style={{fontSize:"14px"}}>
										Lorem ipsum dolor sit amet consectetur. Porttitor
										ullamcorper risus odio rhoncus montes arcu
										suscipit. Lorem mollis dapibus non elit dignissim
										purus feugiat egestas. Mi vehicula sed turpis sem
										cursus sem pulvinar. Elit porttitor turpis nulla
										ullamcorper.
									</p>
									<p style={{fontSize:"14px"}}>
										A amet bibendum faucibus augue in lectus. Velit
										morbi ut ultricies magna dictum. Maecenas at felis
										proin morbi. Tellus auctor ornare sit ut id
										ullamcorper
									</p>
								</div>
							</div>
						</div>
						<div className="mb-60"></div>
						<Marquee gradient={false} speed={40}>
							{client_logo?.map((item, i) => (
								// <img src={item.src} className="sponsor-img" alt="" />
								<h6 key={i} className="font-medium mx-4" style={{fontSize:"15px"}}>
									{item?.title}
								</h6>
							))}
						</Marquee>
					</div>
				</div>
			</div>
		</section>
	);
};

const client_logo = [
	{
		src: img1,
		title: "Integration",
	},
	{
		src: img2,
		title: "Ongoing Live Support",
	},
	{
		src: img3,
		title: "Marketing Support",
	},
	{
		src: img4,
		title: "Unlimited Email Support",
	},
	{
		src: img1,
		title: "Integration",
	},
	{
		src: img2,
		title: "Ongoing Live Support",
	},
	{
		src: img3,
		title: "Marketing Support",
	},
	{
		src: img4,
		title: "Unlimited Email Support",
	},
];

const data = [
	{
		title: "Large Enterprise",
		value: "Large Enterprise",
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

export default BusinessStartups;
