import React from "react";

import cs3 from "../assets/cs3-green.png";

function SkillCard({ title, image, status }) {
	return (
		<div className="skill-card">
			<img title={title} src={image} alt={title} />
			{status !== "learning" && (
				<img
					className="skill-card__coming"
					title={title}
					src={cs3}
					alt={title}
				/>
			)}
		</div>
	);
}

export default SkillCard;
