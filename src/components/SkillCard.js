import React from "react";

import github from "../assets/github.png";

function SkillCard({ title, image }) {
	console.log(image);
	return (
		<div className="skill-card">
			<img title={title} src={image} alt={title} />
		</div>
	);
}

export default SkillCard;
