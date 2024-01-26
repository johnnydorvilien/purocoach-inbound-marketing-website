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
import bg from "./img/yellow.png";
import serices from "./img/sevices.png";
import mobile from "./img/mobileyellow.png";
import servicesmobile from "./img/mobileservices.png";

const ServicePage = () => {
	return (
		<>
			<Header />
			<ServicePageHeader sectionContent />
			{/* <ShapeViewsTwo> */}
			<section style={{
						background: `url(${window.innerWidth > 479 ? bg : mobile}) no-repeat top right / cover`,display:"block",backgroundSize:"100% 100%"}}>
				<PuroCRM />
				<WhiteDivider />
				<ServiceFeatures />
			</section>
				
			{/* </ShapeViewsTwo> */}
			<InboundMarketingSection />
			<OurMeteorology />
			{/* <ShapeViewsTwo parentShape={shape}> */}
			<section style={{
						background: `url(${window.innerWidth > 479 ? serices : servicesmobile}) no-repeat top right / cover`,display:"block",backgroundSize:"100% 100%"}}>
				<SystemServices />
				</section>
			{/* </ShapeViewsTwo> */}
			<BusinessStartups />
			<BusinessConsultingContent />
			<Footer />
		</>
	);
};

export default ServicePage;
