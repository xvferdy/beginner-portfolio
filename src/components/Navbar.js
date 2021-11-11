import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ toggleSidebar }) {
	return (
		<nav className="navbar">
			<div className="navbar__container">
				{/* name */}
				<Link className="navbar__name" to="/">
					Berlianto
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
		</nav>
	);
}

export default Navbar;
