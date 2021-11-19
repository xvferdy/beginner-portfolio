// import "./stylesheets/css/style.css";
import "./stylesheets/css/style2.css";
import Layout from "./layouts/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import New from "./components/UnderConstruction";

import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			{/* <Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about/" element={<About />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/projects/" element={<Projects />} />
						<Route path="/projects/:id" element={<New />} />
					</Routes>
				</Layout>
			</Router>
			<Footer /> */}
		</>
	);
}

export default App;
