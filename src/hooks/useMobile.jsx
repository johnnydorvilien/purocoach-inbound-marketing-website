import { useEffect, useState } from "react";

const useMobile = () => {
	const [mobileScreen, setMobileScreen] = useState(true);

	const handleMobile = () => {
		const width = window.innerWidth;
		if (width < 992) {
			setMobileScreen(true);
		} else {
			setMobileScreen(false);
		}
	};

	useEffect(() => {
		handleMobile();
		window.addEventListener("resize", handleMobile);
	}, []);

	return mobileScreen;
};

export default useMobile;
