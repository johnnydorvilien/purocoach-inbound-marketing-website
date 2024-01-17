import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../pages/Logo";
import { CaretDown, Facebook, Linkedin, Twitter } from "./Icon";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer-top">
					<div className="container">
						<div className="shapes-mobile"></div>
						<div className="footer-top-widget">
							<div className="widget-left">
								<div className="mb-3">
									<Logo />
								</div>
								<h3 className="title d-md-none">
									Sign Up For Our Newsletter
								</h3>
								<form>
									<div className="input-group">
										<input
											type="text"
											placeholder="Email"
											className="form-control form--control"
										/>
										<button className="cmn-btn input-btn-text">
											Subscribe
										</button>
									</div>
								</form>
								<p>
								Get on our newsletter email list to be the first to see inspiring content, news and exclusive offers.
								</p>
								<ul className="social-icons justify-content-start">
									<li>
										<Link to="#">
											<Facebook color="var(--base)" />
										</Link>
									</li>
									<li>
										<Link to="#">
											<Twitter color="var(--base)" />
										</Link>
									</li>
									<li>
										<Link to="#">
											<Linkedin color="var(--base)" />
										</Link>
									</li>
								</ul>
							</div>
							<div className="widget-right">
								{data?.map((item, i) => (
									<FooterLinks key={i} {...item} />
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div style={{fontWeight:"400"}}>
							<Link to="#" style={{fontWeight:"400"}}>Privacy Policy</Link> &copy; Company 2024. All
							rights reserved.
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export const FooterLinks = ({ title, links }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="item">
				<h5 className="subtitle" onClick={() => setOpen(!open)}>
					<span>{title}</span>{" "}
					<span className="d-sm-none">
						{" "}
						<CaretDown />{" "}
					</span>
				</h5>
				<div className={`inner-div ${open ? "active" : ""}`}>
					<ul className="links">
						{links?.map((item, i) => (
							<li key={i}>
								<Link to={item?.url}>{item?.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

const data = [
	{
		title: "Company",
		links: [
			{
				title: "about",
				url: "/about",
			},
			{
				title: "pricing",
				url: "/pricing",
			},
			{
				title: "contact us",
				url: "/contact",
			},
		],
	},
	{
		title: "Products",
		links: [
			{
				title: "CRM",
				url: "/services#crm",
			},
		],
	},
	{
		title: "Services",
		links: [
			{
				title: "Inbound Marketing",
				url: "/services#inbounding",
			},
			{
				title: "Automation",
				url: "/services#automation",
			},
			{
				title: "Sustem Integration",
				url: "/services#integration",
			},
			{
				title: "Sales Development",
				url: "/services#sales-development",
			},
			{
				title: "Business Startups",
				url: "/services#business-coaching",
			},
		],
	},
];

export default Footer;
