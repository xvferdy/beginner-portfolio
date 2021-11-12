import React from "react";

import github from "../assets/github.png";

function SkillCard({ image }) {
	console.log(image);
	return (
		<div className="skill-card">
			<img src={image} alt="" />
		</div>
	);
}

export default SkillCard;
