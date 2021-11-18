import github from "../assets/github.png";
import sass from "../assets/sass.png";
import nodejs from "../assets/nodejs.png";
import vsc from "../assets/vsc.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import git from "../assets/git.png";

// project thumbs
import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";
import thumb4 from "../assets/thumb4.png";
import thumb5 from "../assets/thumb5.png";
import thumb6 from "../assets/thumb6.png";
import thumb7 from "../assets/thumb7.png";

const data = {
	skills: [
		{
			title: "Github",
			image: github,
		},
		{
			title: "Sass",
			image: sass,
		},
		{
			title: "Node Js",
			image: nodejs,
		},
		{
			title: "Visual Studio Code",
			image: vsc,
		},
		{
			title: "Git",
			image: git,
		},
		{
			title: "React Js",
			image: react,
		},
		{
			title: "Javascript",
			image: js,
		},
	],
	projects: [
		{
			title: "Yu-Gi-Oh",
			image: thumb1,
			description: "A responsive simple static page for YuGiOh Duel Links",
			tags: ["HTML", "CSS"],
			githubRepo: "https://github.com/xvferdy/simple-static-website",
			demo: "https://xvferdy.github.io/simple-static-website/",
		},
		{
			title: "Simple Note",
			image: thumb3,
			description: "App with basic CRUD operation with React & JSON server",
			tags: ["React", "JSON Server"],
			githubRepo: "https://github.com/xvferdy/simple-note",
			demo: null,
		},
		{
			title: "Shopping Cart",
			image: thumb5,
			description: "Shopping cart App with context as a state management",
			tags: ["React", "Material-UI"],
			githubRepo: "https://github.com/xvferdy/shopping-cart-my-ver",
			demo: "https://xvferdy.github.io/shopping-cart-my-ver/",
		},

		{
			title: "Simple Chat App",
			image: thumb4,
			description: "Chat with people in a room, brought to you by Socket.IO",
			tags: ["React", "Sass", "Express"],
			githubRepo: "https://github.com/xvferdy/simple-chat-app",
			demo: "https://simple-chat-app-xvferdy.netlify.app/",
		},
		{
			title: "How to be a Millionaire",
			image: thumb2,
			description: "Quiz App inspired by international television game show",
			tags: ["React"],
			githubRepo: "https://github.com/xvferdy/how-to-be-a-millionaire",
			demo: "https://xvferdy.github.io/how-to-be-a-millionaire/",
		},
		{
			title: "Jojo Tarot Card",
			image: thumb6,
			description: "A static web page showing list of card, create with Sass",
			tags: ["HTML", "Sass"],
			githubRepo: "https://github.com/xvferdy/tarot-of-marseilles-sass",
			demo: "https://xvferdy.github.io/tarot-of-marseilles-sass/",
		},
		{
			title: "Previous Portfolio",
			image: thumb7,
			description: "2020 portfolio that I created before hiatus frow web",
			tags: ["React", "Material-UI"],
			githubRepo: "https://github.com/xvferdy/my-portfolio",
			demo: "https://xvferdy.github.io/my-portfolio/",
		},
	],
};

export default data;
