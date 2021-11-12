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
import thumb2 from "../assets/thumb2.png";
import thumb22 from "../assets/thumb22.png";
import thumb222 from "../assets/thumb222.png";
import thumb2222 from "../assets/thumb2222.png";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const handleClick = () => {
	console.info("You clicked the Chip.");
};

function ProjectCard() {
	return (
		<div className="project-card">
			<Card sx={{ maxWidth: "100%" }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="340"
						image={thumb2222}
						alt="Project Thumbnail"
					/>

					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							tarot-of-marseilles-sass
						</Typography>
						<Typography variant="body2" color="#7f7f7f">
							Lizards are a widespread group of squamate reptiles, with over
							6,000 species, ranging across all continents except Antarctica
						</Typography>
						<Stack direction="row" spacing={1}>
							<Chip
								label="React"
								variant="outlined"
								size="small"
								onClick={handleClick}
							/>
							<Chip
								label="Sass"
								variant="outlined"
								size="small"
								color="primary"
								onClick={handleClick}
							/>
						</Stack>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						// size="small"
						variant="contained"
						color="secondary"
						startIcon={<GitHubIcon />}
						href="https://github.com/xvferdy"
						target="_blank"
					>
						Github
					</Button>

					<Button
						href="https://github.com/xvferdy"
						size="small"
						variant="outlined"
						color="error"
						endIcon={<LinkIcon />}
						disabled
					>
						Demo
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}

export default ProjectCard;
