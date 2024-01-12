import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	AutomationIcon2,
	BusinessIcon,
	IntegrationIcon,
	SalesDevelopmentIcon,
} from "../../../components/Icon";
import WhiteDivider from "../../about/WhiteDivider";
import img1 from "../img/system-services/1.png";
import img2 from "../img/system-services/2.png";
import img3 from "../img/system-services/3.png";
import img4 from "../img/system-services/4.png";
const SystemServices = ({ systemData }) => {
	const [showData, setShowData] = useState(data);

	useEffect(() => {
		systemData && setShowData(systemData);
	}, [systemData]);

	return (
		<>
			<section className="system-solutions">
				<div className="container">
					{showData?.map((item, i) => (
						<div className="item" key={i}>
							<div className="target-id" id={item?.id}></div>
							<div
								className="row gy-5 flex-wrap-reverse align-items-center"
								style={{
									flexDirection: i % 2 == 0 ? "row" : "row-reverse",
								}}
							>
								<div
									className={`col-lg-6 ${
										i % 2 == 1 ? "text-lg-end" : ""
									}`}
								>
									<img
										src={item?.img}
										style={{ maxWidth: "595px" }}
										alt=""
									/>
								</div>
								<div className="col-lg-6">
									<h2 className="title">
										{item?.icon} <span>{item?.title}</span>
									</h2>
									{item?.text?.map((txt, j) => (
										<p key={j}>{txt}</p>
									))}
									<Link
										to="/sign-up"
										className="cmn-btn btn-white btn-standard"
										style={{ minWidth: "175px" }}
									>
										Try it Free
									</Link>
								</div>
							</div>
							{i != data?.length - 1 || systemData?.length - 1 ? (
								<WhiteDivider margin="65px" />
							) : (
								""
							)}
						</div>
					))}
				</div>
			</section>
		</>
	);
};

const data = [
	{
		icon: <AutomationIcon2 />,
		img: img1,
		title: "Automation",
		id: "automation",
		text: [
			"The perfect automation for your marketing campaigns start here. We are powered by the #1 marketing tool- HubSpot.",
			"Lorem ipsum dolor sit amet consectetur. Id viverra eu scelerisque in pulvinar in dictumst quis tempor. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.",
		],
	},
	{
		icon: <IntegrationIcon />,
		img: img2,
		title: "System Integration",
		id: "integration",
		text: [
			"Streamline and connect data through integrationfor Better Client Experience.",
			"Lorem ipsum dolor sit amet consectetur. Id viverra eu scelerisque in pulvinar in dictumst quis tempor. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.",
		],
	},
	{
		icon: <SalesDevelopmentIcon />,
		img: img3,
		title: "Sales Development",
		id: "sales-development",
		text: [
			"Connecting Marketing and Sales Experience with a Business Development Plan to set your business to success.",
			"Lorem ipsum dolor sit amet consectetur. Id viverra eu scelerisque in pulvinar in dictumst quis tempor. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.",
		],
	},
	{
		icon: <BusinessIcon />,
		img: img4,
		title: "Business Consulting ",
		id: "business-coaching",
		text: [
			"Lorem ipsum dolor sit amet consectetur. Odio ornare feugiat quam mauris porttitor.",
			"Lorem ipsum dolor sit amet consectetur. Id viverra eu scelerisque in pulvinar in dictumst quis tempor. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.",
		],
	},
];

export default SystemServices;
