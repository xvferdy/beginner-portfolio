import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, closeSidebar }) {
	const styles = isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed";
	return (
		<Fragment>
			{isOpen ? <div className="backdrop" onClick={closeSidebar}></div> : null}
			<nav className={styles}>
				<ul className="sidebar__list">
					<li className="sidebar__list__item">
						<NavLink
							className={(navData) =>
								navData.isActive ? "active" : "sidebar__list__item__link"
							}
							to="/"
							onClick={closeSidebar}
						>
							Home
						</NavLink>
					</li>
					<li className="sidebar__list__item">
						<NavLink
							className={(navData) =>
								navData.isActive ? "active" : "sidebar__list__item__link"
							}
							to="/about"
							onClick={closeSidebar}
						>
							About
						</NavLink>
					</li>
					<li className="sidebar__list__item">
						<NavLink
							className={(navData) =>
								navData.isActive ? "active" : "sidebar__list__item__link"
							}
							to="/skills"
							onClick={closeSidebar}
						>
							Skills
						</NavLink>
					</li>
					<li className="sidebar__list__item">
						<NavLink
							className={(navData) =>
								navData.isActive ? "active" : "sidebar__list__item__link"
							}
							to="/projects"
							onClick={closeSidebar}
						>
							Projects
						</NavLink>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
}

export default Sidebar;
