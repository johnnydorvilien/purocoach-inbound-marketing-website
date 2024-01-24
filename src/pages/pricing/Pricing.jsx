import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PricingSection from "./PricingSection";
const Pricing = () => {
	return (
		<>
			<Header />
			<PricingSection />
			{/* <br className="d-none d-md-block" />
			<br className="d-none d-md-block" /> */}
			<Footer />
		</>
	);
};

export default Pricing;
