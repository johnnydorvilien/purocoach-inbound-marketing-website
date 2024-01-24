import React from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import useScreen from "../../hooks/useScreen";
import Banner from "./Banner";
import BusinessBoost from "./BusinessBoost";
import EarningEstimator from "./EarningEstimator";
import Feature from "./Feature";
import RequestDemo from "./RequestDemo";
import Service from "./Service";
import TrustedCrm from "./TrustedCrm";
import WhayChooseUs from "./WhayChooseUs";
import WhoWeAre from "./WhoWeAre";
import WorkingWithUs from "./WorkingWithUs";

const Home = () => {
	const screen = useScreen();
	return (
		<>
			<Layout>
				<Banner />
				{/* {screen < 768 && <TrustedCrm />} */}
				<Service />
				<TrustedCrm />
				{/* {screen >= 768 && <TrustedCrm />} */}
				{/* {screen >= 768 && <EarningEstimator />} */}
				<EarningEstimator />
				<Feature />
				<WhoWeAre />
				<WorkingWithUs />
				<WhayChooseUs />
				<BusinessBoost />
				<RequestDemo />
				{/* <br className="d-none d-md-block" />
				<br className="d-none d-md-block" /> */}
				<Footer />
			</Layout>
		</>
	);
};

export default Home;
