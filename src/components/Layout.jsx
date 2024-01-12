import React from "react";
import Header from "./Header";

const Layout = ({ floating, children }) => {
	return (
		<>
			<Header floating={floating} />
			{children}
		</>
	);
};

export default Layout;
