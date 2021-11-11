import React from "react";

import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Telegram";

import myAvatar from "../assets/gabe.jpg";

// material
const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
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
				{/* <div className="about__header__profile">
					<div className="about__header__profile__avatar">
						<StyledBadge
							overlap="circular"
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
							variant="dot"
						>
							<Avatar alt="Me" src={myAvatar} sx={{ width: 56, height: 56 }} />
						</StyledBadge>
					</div>
					<div className="about__header__profile__status">
						<div className="about__header__profile__status__name">
							Berlianto
						</div>
						<div className="about__header__profile__status__sub-name">
							Guten morgen
						</div>
					</div>
				</div> */}

				<h3 className="about__header__sub-title">❝Dress to Impress❞</h3>
			</div>

			<main className="about__content">
				<p>
					asdasd Voluptate velit ad duis sunt proident commodo qui deserunt
					reprehenderit amet aliqua. Quis labore in in culpa sit minim in non
					aute eu ad velit amet. Ipsum proident tempor tempor in deserunt
					exercitation officia voluptate ad. Pariatur cillum dolore laboris
					Lorem dolor pariatur. asdasd Voluptate velit ad duis sunt proident
					commodo qui
				</p>
				<p>
					asdasd Voluptate velit ad duis sunt proident commodo qui deserunt
					reprehenderit amet aliqua. Quis labore in in culpa sit minim in non
					aute eu ad velit amet. Ipsum proident tempor tempor in deserunt
					exercitation officia voluptate ad. Pariatur cillum dolore laboris
					Lorem dolor pariatur. asdasd Voluptate velit ad duis sunt proident
					commodo qui
				</p>
				<p>
					sum proident tempor tempor in deserunt exercitation officia voluptate
					ad. Pariatur cillum dolore laboris Lorem dolor pariatur. asdasd
					Voluptate velit ad duis sunt proident commodo qui
				</p>
			</main>
		</div>
	);
}

export default About;
