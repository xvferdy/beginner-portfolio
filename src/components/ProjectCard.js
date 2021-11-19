import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import thumb1 from "../assets/thumb1.png";
// import thumb2 from "../assets/thumb2.png";
// import thumb3 from "../assets/thumb3.png";
// import thumb4 from "../assets/thumb4.png";
// import thumb5 from "../assets/thumb5.png";
// import thumb6 from "../assets/thumb6.png";
// import thumb7 from "../assets/thumb7.png";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const handleClick = () => {
	console.info("You clicked the Chip.");
};

function ProjectCard({ title, projectImg, desc, tags, repo, demo }) {
	return (
		<div className="project-card">
			<Card sx={{ maxWidth: "100%" }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="100%"
						width="100%"
						image={projectImg}
						alt="Project Thumbnail"
					/>
					{/* <CardContent sx={{ backgroundColor: "#f7f7f7", minHeight: "177px" }}> */}
					<CardContent sx={{ backgroundColor: "#f7f7f7" }}>
						{/* <CardContent> */}
						<Typography gutterBottom variant="h5" component="div">
							{title}
						</Typography>
						<Typography variant="body2" color="#7f7f7f">
							{desc}
						</Typography>
						<Stack direction="row" spacing={1}>
							{tags.map((tag) => (
								<Chip
									key={tag}
									label={tag.toLowerCase()}
									variant="outlined"
									size="small"
									color="primary"
									onClick={handleClick}
								/>
							))}
						</Stack>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						variant="contained"
						color="info"
						startIcon={<GitHubIcon />}
						href={repo}
						target="_blank"
					>
						Github
					</Button>

					<Button
						href={demo ? demo : "#"}
						target="_blank"
						size="small"
						variant="outlined"
						color="info"
						endIcon={<LinkIcon />}
						disabled={Boolean(!demo)}
					>
						Demo
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}

export default ProjectCard;
