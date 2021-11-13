import React, { Fragment } from "react";

import Navigation from "../components/Navigation";

function Layout({ children }) {
	return (
		<Fragment>
			<Navigation />
			<div className="pages">{children}</div>
		</Fragment>
	);
}

export default Layout;
