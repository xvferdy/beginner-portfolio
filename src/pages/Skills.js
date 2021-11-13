import React from "react";
import SkillCard from "../components/SkillCard";
import portfolioData from "../utils/portfolioData";
import Skeleton from "@mui/material/Skeleton";

function Skills() {
	return (
		<div className="skills">
			<div className="skills__header">
				<h1 className="skills__header__title">Tech Stack</h1>
				<h3 className="skills__header__sub-title">❝My Latest Interests❞</h3>
			</div>
			<main className="skills__content">
				<div className="skills__content__cards">
					{portfolioData.skills.map((project) => (
						<SkillCard {...project} />
					))}
					<Skeleton variant="rectangular" width="30%" height={100} />
					<iframe
						src="https://www.w3schools.com"
						title="W3Schools Free Online Web Tutorials"
						width="30%"
						height="100px"
					></iframe>

					<iframe
						src="https://www.w3schools.com"
						title="W3Schools Free Online Web Tutorials"
						width="30%"
						height="100px"
					></iframe>
					<Skeleton
						variant="rectangular"
						animation={false}
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
