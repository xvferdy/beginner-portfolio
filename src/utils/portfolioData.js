// skill imgs
import github from "../assets/github.png";
import sass from "../assets/sass.png";
import nodejs from "../assets/nodejs.png";
import vscode from "../assets/vscode.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import redux from "../assets/redux.png";
import netlify from "../assets/netlify.png";
import express from "../assets/express.png";

// project thumbs
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";
import thumb4 from "../assets/thumb4.jpg";
import thumb5 from "../assets/thumb5.jpg";
import thumb6 from "../assets/thumb6.jpg";
import thumb7 from "../assets/thumb7.jpg";

const data = {
  skills: [
    {
      title: "Visual Studio Code",
      image: vscode,
      status: "learning",
    },
    {
      title: "Git",
      image: git,
      status: "learning",
    },
    {
      title: "Javascript",
      image: js,
      status: "learning",
    },
    {
      title: "Sass",
      image: sass,
      status: "learning",
    },
    {
      title: "Github",
      image: github,
      status: "learning",
    },
    {
      title: "Node Js",
      image: nodejs,
      status: "learning",
    },
    {
      title: "React JS",
      image: react,
      status: "learning",
    },
    {
      title: "Netlify",
      image: netlify,
      status: "learning",
    },
    {
      title: "Redux",
      image: redux,
      status: "ptl", // plan to learn
    },
    {
      title: "Express JS",
      image: express,
      status: "ptl", // plan to learn
    },
  ],
  projects: [
    {
      title: "Simple Note",
      image: thumb3,
      description: "App with basic CRUD operation with React & JSON server",
      tags: ["React", "JSON Server"],
      githubRepo: "https://github.com/xvferdy/simple-note",
      demo: null,
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
      title: "Yu-Gi-Oh",
      image: thumb1,
      description: "A responsive simple static page for YuGiOh Duel Links",
      tags: ["HTML", "CSS"],
      githubRepo: "https://github.com/xvferdy/simple-static-website",
      demo: "https://xvferdy.github.io/simple-static-website/",
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
      description:
        "My 2020's portfolio that I created before hiatus from web dev",
      tags: ["React", "Material-UI"],
      githubRepo: "https://github.com/xvferdy/my-portfolio",
      demo: "https://xvferdy.github.io/my-portfolio/",
    },
  ],
  pagesUnderConstruction: ["/skills"],
};

export default data;
