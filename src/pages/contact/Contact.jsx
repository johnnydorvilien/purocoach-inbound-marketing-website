import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactBanner from "./components/ContactBanner";

const Contact = () => {
	return (
		<>
			<Header />
			<ContactBanner />
			{/* <br className="d-none d-md-block" />
			<br className="d-none d-md-block" /> */}
			<Footer />
		</>
	);
};

export default Contact;
