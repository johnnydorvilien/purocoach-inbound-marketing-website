import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutBanner from "./AboutBanner";
import AboutUsSection from "./AboutUsSection";
import BlackDivider from "./BlackDivider";
import PartnerWithUs from "./PartnerWithUs";
import QuoteSection from "./QuoteSection";
import ShapeViews from "./ShapeViews";
import Team from "./Team";
import ValuesSection from "./ValuesSection";

const AboutPage = () => {
	return (
		<>
			<Header />
			<AboutBanner />
			<AboutUsSection />
			<ValuesSection />
			<PartnerWithUs />
			<ShapeViews>
				<Team />
				<BlackDivider />
				<QuoteSection />
			</ShapeViews>
			<br className="d-none d-md-block" />
			<br className="d-none d-md-block" />
			<Footer />
		</>
	);
};

export default AboutPage;
