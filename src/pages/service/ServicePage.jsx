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
const ServicePage = () => {
	return (
		<>
			<Header />
			<ServicePageHeader sectionContent />
			<ShapeViewsTwo>
				<PuroCRM />
				<WhiteDivider />
				<ServiceFeatures />
			</ShapeViewsTwo>
			<InboundMarketingSection />
			<OurMeteorology />
			<ShapeViewsTwo parentShape={shape}>
				<SystemServices />
			</ShapeViewsTwo>
			<BusinessStartups />
			<BusinessConsultingContent />
			<Footer />
		</>
	);
};

export default ServicePage;
