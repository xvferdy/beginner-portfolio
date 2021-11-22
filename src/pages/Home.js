import React, { useEffect, useState } from "react";
import axios from "axios";

import welcome from "../assets/welcome.gif";
import { randomIndex } from "../utils/randomIndex";

function Home() {
	const [giphy, setGiphy] = useState("");
	const [isLoading, setIsloading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsloading(true);
			try {
				const apiRoot = "https://api.giphy.com/v1/gifs/";
				const api_key = process.env.REACT_APP_GIPHY_KEY;
				const result = await axios(`${apiRoot}trending?api_key=${api_key}`);
				setGiphy(
					result.data.data[randomIndex(result.data.data.length)].images
						.fixed_height.url
				);
			} catch (err) {
				console.log(err);
				setGiphy(welcome);
			}
			setIsloading(false);
		};
		fetchData();
	}, []);

	return (
		<div className="home">
			<h1 className="home__text">Hello! ツ</h1>
			<div className="home__gif">
				{isLoading ? (
					<span>
						<span>Loading</span>
						<span className="AnimatedEllipsis"></span>
					</span>
				) : (
					<img src={giphy} alt="404" />
				)}
				{/* <img src={myAvatar} alt="" width="200" /> */}
			</div>
		</div>
	);
}

export default Home;
