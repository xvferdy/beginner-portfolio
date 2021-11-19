import React, { useEffect, useState } from "react";
import axios from "axios";

import myAvatar from "../assets/gabe.jpg";
import { randomIndex } from "../utils/randomIndex";

function Home() {
	// const [giphy, setGiphy] = useState("");
	// const [isLoading, setIsloading] = useState(false);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setIsloading(true);
	// 		try {
	// 			const apiRoot = "https://api.giphy.com/v1/gifs/";
	// 			const api_key = process.env.REACT_APP_GIPHY_KEY;
	// 			const result = await axios(`${apiRoot}trending?api_key=${api_key}`);

	// 			setGiphy(
	// 				result.data.data[randomIndex(result.data.data.length)].images
	// 					.fixed_height.url
	// 			);
	// 		} catch (err) {
	// 			console.log(err);
	// 			setGiphy(myAvatar);
	// 		}
	// 		setIsloading(false);
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<div className="home">
			<h1 className="home__text">Hello!</h1>
			<div className="home__gif">
				{/* {isLoading ? <p>Loading....</p> : <img src={giphy} alt="" />} */}
				<img src={myAvatar} alt="" width="200" />
			</div>
		</div>
	);
}

export default Home;
