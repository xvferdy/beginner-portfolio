import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function Layout({ children }) {
	return (
		<Fragment>
			<Navigation />
			<div className="pages">{children}</div>
			<Footer />
		</Fragment>
	);
}

export default Layout;
