import React, { useState, useEffect } from "react";
import "./CardComponent.scss";
import { NavLink } from "react-router-dom";
// import axios from "axios";

export const CardComponent = (props) => {
	// const [shelves, setShelves] = useState([]);
	const { shelf, image } = props;

	//function to make a call to the server and grab items
	// const handleClick = () => {
	// 	axios.get("http://localhost:8000/shelves").then((res) => {
	// 		console.log("🕵🏻‍♂️ res: ", res); //TODO: remove/comment

	// 		console.log("🕵🏻‍♂️ res.data[0].item: ", res.data[0].item); //TODO: remove/comment

	// 		console.log("🕵🏻‍♂️ res.data[0].notes: ", res.data[0].notes); //TODO: remove/comment

	// 		setShelves([res.data[0].item, res.data[0].notes, res.data[0].location]); //TODO: remove/comment
	// 	});
	// };

	return (
		<article className="shelf-card">
			<NavLink to={"/shelves"}>
				<div className="shelf-card__content-container">
					<img
						// onClick={handleClick}
						src={image}
						alt="stuff"
						className="shelf-card__image"
					></img>
					<div className="shelf-card__category">{shelf}</div>

					{/* {shelves} */}
				</div>
			</NavLink>
		</article>
	);
};
