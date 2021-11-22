import React from "react";

import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GitHubIcon from "@mui/icons-material/GitHub";

import me4x from "../assets/me4x.jpg";
import signature from "../assets/signature2.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#25d366",
		color: "#25d366",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		width: "19%",
		height: "19%",
		borderRadius: "50%",
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

function About() {
	return (
		<div className="about">
			<div className="about__header">
				<h1 className="about__header__title">About Me</h1>
				<div className="about__header__profile">
					<div className="about__header__profile__avatar">
						<StyledBadge
							overlap="circular"
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
							variant="dot"
						>
							<Avatar alt="Me" src={me4x} sx={{ width: 56, height: 56 }} />
						</StyledBadge>
					</div>
					<div className="about__header__profile__status">
						<div className="about__header__profile__status__name">
							Berlianto
						</div>
						<div className="about__header__profile__status__sub-name">
							Feeling good, man
						</div>
					</div>
				</div>

				<h3 className="about__header__sub-title">❝ Dress to Impress ❞</h3>
			</div>

			<main className="about__content">
				<p>
					Hello, my name is Berlianto, I was born on June 12, 1996 in{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://en.wikipedia.org/wiki/Tembagapura"
					>
						Tembagapura
					</a>
					,{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://en.wikipedia.org/wiki/Timika"
					>
						Timika Papua
					</a>
					. I spent my childhood in my beloved city in <br />
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://id.wikipedia.org/wiki/Kuala_Kencana,_Mimika"
					>
						Kuala-Kencana{" "}
					</a>
					starting from kindergarten to Junior High School. After graduating
					from Junior High School I'm still not familiar with the internet but I
					really like playing single player games on my computer (the old box
					monitors).
				</p>
				<p>
					When I entered high school I moved to{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://en.wikipedia.org/wiki/North_Toraja_Regency"
					>
						North Toraja
					</a>
					,{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://gor.wikipedia.org/wiki/Sulawesi_Selatan"
					>
						South Sulawesi
					</a>
					. I live in a Dormitory and there I experiencing using the internet
					for the first time. While studying in high school I learned the{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://en.wikipedia.org/wiki/Pascal_(programming_language)"
					>
						Pascal
					</a>{" "}
					programming language and I wasn't really interested for some reason.{" "}
				</p>
				<p>
					At the end of 2014 I had the opportunity to continue my education to
					university. I entered{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://id.wikipedia.org/wiki/Universitas_Gunadarma"
					>
						Gunadarma University
					</a>{" "}
					which is located in{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://en.wikipedia.org/wiki/Depok"
					>
						Depok
					</a>{" "}
					and choose{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://id.wikipedia.org/wiki/Informatika"
					>
						Technical Information/Computer Science
					</a>{" "}
					(I don't know why I chose this). During my studies I lived alone in
					the Margonda area where my{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://id.wikipedia.org/wiki/Indekos"
					>
						"kosan"
					</a>{" "}
					and my campus were very close. In class we learn a lot about the world
					of informatics technology especially the software's lecture, there is
					a lot of lecture we studied there but I really like the web
					development class even though I get the class at the last of the
					semester. I finish my final test at December 2019 and got my
					graduation ceremony at April 2020.
				</p>
				<p>
					Thanks for reading my little story, and if want to reach me you can
					email me at{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:berlianto.ferdynand@gmail.com"
					>
						berlianto.ferdynand@gmail.com
					</a>
					, or via socials below:
				</p>
				<div className="about__content__signature">
					<img src={signature} alt="" />
				</div>

				<div className="about__content__socials">
					<div className="social-icons">
						<a
							className="social-icon social-icon--github"
							href="https://github.com/xvferdy"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHubIcon />
							<div className="tooltip">Github</div>
						</a>
						<a
							className="social-icon social-icon--steam"
							href="https://steamcommunity.com/id/xvferdygamer"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SportsEsportsIcon />
							<div className="tooltip">Steam</div>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}

export default About;
