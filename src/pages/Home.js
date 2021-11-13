import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
	// const [giphy, setGiphy] = useState("");

	// const randomIndex = (length) => {
	// 	const randomIndex = Math.floor(Math.random() * length);
	// 	return randomIndex;
	// };
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const apiRoot = "https://api.giphy.com/v1/gifs/";
	// 		const api_key = process.env.REACT_APP_GIPHY_KEY;
	// 		const result = await axios(`${apiRoot}trending?api_key=${api_key}`);

	// 		console.log(result.data.data.length);
	// 		setGiphy(
	// 			result.data.data[randomIndex(result.data.data.length)].images
	// 				.fixed_height.url
	// 		);
	// 	};
	// 	fetchData();
	// }, []);

	// console.log(giphy);

	return (
		<div>
			{" "}
			{/* <img src={giphy} alt="" /> */}
			<div>-nama</div>
		</div>
	);
}

export default Home;
