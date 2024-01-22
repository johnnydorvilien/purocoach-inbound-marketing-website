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
	PieChartIcon
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
			{/* <InboundMarketingSection title="CRM Inbound Marketing" /> */}
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
		title: "Sales Funnel",
		id: "automation",
		text: [
			"Understand your customer's purchasing journey, while also identifying what stage of this journey your customers are in. These insights can be used to decide which marketing channels and activities will best guide your customer towards a purchase",
			"Your funnel will allow you to work smarter, not harder—allowing you to start with a general picture of your target audience. By knowing your target audience's social media habits, for example, you can build awareness on their favorite sites, leading some potential customers to your landing page.",
		],
	},
	{
		icon: <IntegrationIcon />,
		img: img2,
		title: "Email Communication",
		id: "integration",
		text: [
			"Email marketing is a solid tool for getting your brand, product, or service out there, with the added benefit that email marketing tends to go to people who are already interested in your service. However, for small businesses, especially up-and-coming ones, it may not be so easy to see the exact benefits.",
			"Generates traffic to your website.",
			"Strengthens relationships with customers",
			"Increases brand awareness",
			"Cost-effective",
		],
	},
	{
		icon: <SalesDevelopmentIcon />,
		img: img3,
		title: "Workflows & Sequences",
		id: "sales-development",
		text: [
			"Create personalized, targeted automation sequences and workflows that nurture leads, engage customers, and optimize their overall marketing strategies.",
			"Define goals and objectives.",
			"Segment your audience for targeted emails.",
			"Personalize emails using dynamic content.",
			"Utilize automation workflows for multi-step campaigns.",
			"A/B test email elements for better performance.",
			"Monitor metrics like open rates and conversions.",
			"Continuously optimize based on data-driven insights.",
		],
	},
	{
		icon: <PieChartIcon />,
		img: img4,
		title: "Reporting & KPI Performance",
		id: "business-coaching",
		text: [
			"Allow you and your business leaders to quickly and easily review and analyze key performance indicators (KPIs) and thereby know how your organization is performing against specific strategic marketing and sales goals.",
		],
	},
];

export default ProductsPage;
