import React from "react";

import SkillCard from "../components/SkillCard";
import portfolioData from "../utils/portfolioData";
import Skeleton from "@mui/material/Skeleton";

function Skills() {
	return (
		<div className="skills">
			<div className="skills__header">
				<h1 className="skills__header__title">Tech Stacks</h1>
				<h3 className="skills__header__sub-title">❝ My Latest Interests ❞</h3>
			</div>
			<main className="skills__content">
				<div className="skills__content__cards">
					{portfolioData.skills.map((project) => (
						<SkillCard key={project.title} {...project} />
					))}
					<Skeleton
						animation="wave"
						variant="rectangular"
						width="30%"
						height={100}
					/>
					<Skeleton
						animation="wave"
						variant="rectangular"
						width="30%"
						height={100}
					/>
				</div>
			</main>
		</div>
	);
}

export default Skills;
