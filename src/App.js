import "react-range-slider-input/dist/style.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

import { useLayoutEffect } from "react";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import AboutPage from "./pages/about/AboutPage";
import CreatePassword from "./pages/auth/CreatePassword";
import EmailVerify from "./pages/auth/EmailVerify";
import SignUpSuccessfull from "./pages/auth/SignUpSuccessfull";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Payment from "./pages/payment/Payment";
import PaymentComplete from "./pages/payment/PaymentComplete";
import Pricing from "./pages/pricing/Pricing";
import ProductsPage from "./pages/service/ProductsPage";
import ServicePage from "./pages/service/ServicePage";
import TrialPage from "./pages/trial/TrialPage";

function App() {
	const Wrapper = ({ children }) => {
		const location = useLocation();
		useLayoutEffect(() => {
			document.documentElement.scrollTo(0, 0);
		}, [location.pathname]);
		return children;
	};
	return (
		<BrowserRouter>
			<Wrapper>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/services" element={<ServicePage />} />
					<Route path="/products-crm" element={<ProductsPage />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/payment" element={<Payment />} />
					<Route path="/payment/complete" element={<PaymentComplete />} />
					{/* Authentication */}
					<Route path="/auth">
						<Route path="login" index element={<Login />} />
						<Route path="sign-up" element={<SignUp />} />
						<Route path="create-password" element={<CreatePassword />} />
						<Route path="email-verify" element={<EmailVerify />} />
						<Route
							path="signup-succeed"
							element={<SignUpSuccessfull />}
						/>
					</Route>
					{/* Trial */}
					<Route path="/trial-signup" element={<TrialPage />} />
					{/* <Route path="/trial">
					<Route index element={<TrialPage />} />
					<Route path="step-1" index element={<TrialStep1 />} />
					<Route path="step-2" element={<TrialStep2 />} />
					<Route path="step-3" element={<TrialStep3 />} />
					<Route path="email-verify" element={<TrialEmailVerify />} />
					<Route path="trial-signup" element={<TrialSignup />} />
				</Route> */}
				</Routes>
				<Toaster position="top-center" />
			</Wrapper>
			<div className="border-line-1">
				<span></span>
				<span></span>
			</div>
			<div className="border-line-2">
				<span></span>
				<span></span>
			</div>
		</BrowserRouter>
	);
}

export default App;
