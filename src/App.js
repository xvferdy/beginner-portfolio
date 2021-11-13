import "./stylesheets/css/style.css";
import Layout from "./layouts/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import Footer from "./components/Footer";
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
				{/* <AddAlertIcon /> */}
			</Router>
			<Footer />
		</>
	);
}

export default App;
