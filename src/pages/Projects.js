import React from "react";

import ProjectCard from "../components/ProjectCard";
import portfolioData from "../utils/portfolioData";

function Projects() {
	return (
		<div className="projects">
			<div className="projects__header">
				<h1 className="projects__header__title">Projects</h1>
				<h3 className="projects__header__sub-title">❝ Beginner's projects ❞</h3>
			</div>
			<main className="projects__content">
				<div className="projects__content__cards">
					{portfolioData.projects.map((project) => (
						<ProjectCard
							key={project.title}
							title={project.title}
							projectImg={project.image}
							desc={project.description}
							tags={project.tags}
							repo={project.githubRepo}
							demo={project.demo}
						/>
					))}
				</div>
			</main>
		</div>
	);
}

export default Projects;
