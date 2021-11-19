import React, { Fragment, useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Navigation() {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	const closeSidebar = () => {
		setShowSidebar(false);
	};

	return (
		<Fragment>
			<Navbar toggleSidebar={toggleSidebar} />
			<Sidebar isOpen={showSidebar} closeSidebar={closeSidebar} />
		</Fragment>
	);
}

export default Navigation;
