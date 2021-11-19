import React from "react";

import cs from "../assets/cs3-min.png";

function SkillCard({ title, image, status }) {
	return (
		<div className="skill-card">
			<img title={title} src={image} alt={title} />
			{status !== "learning" && (
				<img
					className="skill-card__coming"
					title={title}
					src={cs}
					alt={title}
				/>
			)}
		</div>
	);
}

export default SkillCard;
