import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
	return (
		<div className="projects">
			<div className="projects__header">
				<h1 className="projects__header__title">About Me</h1>
				<h3 className="projects__header__sub-title">❝Learning by doing❞</h3>
			</div>
			<main className="projects__content">
				<div className="projects__content__cards">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</main>
		</div>
	);
}

export default Projects;
