import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import UnderConstruction from "../components/UnderConstruction";
import portfolioData from "../utils/portfolioData";

function Navbar({ toggleSidebar }) {
	const { pagesUnderConstruction } = portfolioData;
	const { pathname } = useLocation();

	return (
		<nav className="navbar">
			<div className="navbar__container">
				{/* name */}
				<Link className="navbar__name" to="/">
					berlianto
				</Link>
				{/* list */}
				<ul className="navbar__list">
					<li className="navbar__list__item">
						<NavLink
							className={(navData) =>
								navData.isActive ? "active" : "navbar__list__item__link"
							}
							to="/about"
						>
							About
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink
							className={(navData) =>
								navData.isActive ? "active" : "navbar__list__item__link"
							}
							to="/skills"
						>
							Skills
						</NavLink>
					</li>
					<li className="navbar__list__item">
						<NavLink
							className={(navData) =>
								navData.isActive ? "active" : "navbar__list__item__link"
							}
							to="/projects"
						>
							Projects
						</NavLink>
					</li>
				</ul>
				{/* button */}
				<div className="navbar__button" onClick={toggleSidebar}>
					<div className="navbar__button__component">&#9776;</div>
				</div>
			</div>
			{pagesUnderConstruction.includes(pathname) ? <UnderConstruction /> : null}
		</nav>
	);
}

export default Navbar;
