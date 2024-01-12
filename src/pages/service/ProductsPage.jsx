import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhiteDivider from "../about/WhiteDivider";
import BusinessConsultingContent from "./components/BusinessConsultingContent";
import BusinessStartups from "./components/BusinessStartups";
import InboundMarketingSection from "./components/InboundMarketingSection";
import OurMeteorology from "./components/OurMeteorology";
import PuroCRM from "./components/PuroCRM";
import ServiceFeatures from "./components/ServiceFeatures";
import ServicePageHeader from "./components/ServicePageHeader";
import ShapeViewsTwo from "./components/ShapeViewsTwo";
import SystemServices from "./components/SystemServices";
import shape from "./img/yellow-top.png";

import {
	AutomationIcon2,
	BusinessIcon,
	IntegrationIcon,
	SalesDevelopmentIcon,
} from "../../components/Icon";
import img1 from "./img/system-services/1.png";
import img2 from "./img/system-services/2.png";
import img3 from "./img/system-services/3.png";
import img4 from "./img/system-services/4.png";
const ProductsPage = () => {
	return (
		<>
			<Header />
			<ServicePageHeader title="CRM Software" />
			<ShapeViewsTwo>
				<PuroCRM />
				<WhiteDivider />
				<ServiceFeatures />
			</ShapeViewsTwo>
			<InboundMarketingSection title="CRM Inbound Marketing" />
			<OurMeteorology />
			<ShapeViewsTwo parentShape={shape}>
				<SystemServices systemData={data} />
			</ShapeViewsTwo>
			<BusinessStartups />
			<BusinessConsultingContent />
			<Footer />
		</>
	);
};
const data = [
	{
		icon: <AutomationIcon2 />,
		img: img1,
		title: "CRM Automation",
		id: "automation",
		text: [
			"The perfect automation for your marketing campaigns start here. We are powered by the #1 marketing tool- HubSpot.",
			"Lorem ipsum dolor sit amet consectetur. Id viverra eu scelerisque in pulvinar in dictumst quis tempor. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.",
		],
	},
	{
		icon: <IntegrationIcon />,
		img: img2,
		title: "CRM System Integration",
		id: "integration",
		text: [
			"Streamline and connect data through integrationfor Better Client Experience.",
			"Lorem ipsum dolor sit amet consectetur. Id viverra eu scelerisque in pulvinar in dictumst quis tempor. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.",
		],
	},
	{
		icon: <SalesDevelopmentIcon />,
		img: img3,
		title: "CRM Sales Development",
		id: "sales-development",
		text: [
			"Connecting Marketing and Sales Experience with a Business Development Plan to set your business to success.",
			"Lorem ipsum dolor sit amet consectetur. Id viverra eu scelerisque in pulvinar in dictumst quis tempor. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.",
		],
	},
	{
		icon: <BusinessIcon />,
		img: img4,
		title: "CRM Business Consulting ",
		id: "business-coaching",
		text: [
			"Lorem ipsum dolor sit amet consectetur. Odio ornare feugiat quam mauris porttitor.",
			"Lorem ipsum dolor sit amet consectetur. Id viverra eu scelerisque in pulvinar in dictumst quis tempor. Eget nunc pellentesque eu eros viverra consequat habitasse aliquam sit.",
		],
	},
];

export default ProductsPage;
