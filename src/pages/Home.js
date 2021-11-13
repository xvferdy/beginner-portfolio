import React, { useEffect, useState } from "react";
import axios from "axios";
import myAvatar from "../assets/gabe.jpg";

function Home() {
	// const [giphy, setGiphy] = useState("");
	// const [isLoading, setIsloading] = useState(false);

	// const randomIndex = (length) => {
	// 	const randomIndex = Math.floor(Math.random() * length);
	// 	return randomIndex;
	// };
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setIsloading(true);
	// 		try {
	// 			const apiRoot = "https://api.giphy.com/v1/gifs/";
	// 			const api_key = process.env.REACT_APP_GIPHY_KEY;
	// 			const result = await axios(`${apiRoot}trending?api_key=${api_key}`);

	// 			console.log(result.data.data.length);
	// 			setGiphy(
	// 				result.data.data[randomIndex(result.data.data.length)].images
	// 					.fixed_height.url
	// 			);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 		setIsloading(false);
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<div className="home">
			<h1 className="home__text">Hello!</h1>
			<div className="home__gif">
				{/* {isLoading ? <p>Loadingg....</p> : <img src={giphy} alt="" />} */}
				<img src={myAvatar} alt="" width="200" />
			</div>
		</div>
	);
}

export default Home;
