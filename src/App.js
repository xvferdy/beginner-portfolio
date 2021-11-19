import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import "./stylesheets/css/style.css";

function App() {
	return (
		<>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about/" element={<About />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/projects/" element={<Projects />} />
					</Routes>
				</Layout>
			</Router>
			<Footer />
		</>
	);
}

export default App;
