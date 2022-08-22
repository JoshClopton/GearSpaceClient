import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ShelfItems.scss";

const ShelfItems = () => {
	//Initialize a variable to hold state for a users shelf inventory
	const [shelfData, setShelfData] = useState(null);
	//On page load send a request to get the users shelf items
	useEffect(() => {
		axios
			.get(`http://localhost:8000/shelves/`, {
				withCredentials: true,
			})
			//Initialize shelves variable as the response data and set the state to be the shelves. Evaluates to [{},{}] with the key/value of shelf: "cook"
			.then((res) => {
				const shelves = res.data;
				setShelfData(shelves);
			});
	}, []);

	//create an array to hold the shelves that are not duplicates
	let uniqueShelves = [];

	//If a user has shelf data I only want to display one shelf card for each shelf category. Loop through the data and push the shelves into uniqeShelves only one time
	shelfData &&
		shelfData.forEach((item) => {
			if (!uniqueShelves.includes(item.shelf)) {
				uniqueShelves.push(item.shelf);
			}
		});

	return (
		<div>
			{/* Make sure shelfData is not null and that it has something in the array */}
			{shelfData && shelfData.length ? (
				<>
					<h1 className="your-shelves">Your Shelves</h1>
					<main className="shelves-container">
						{/* map through the uniqueShelves array and for each item create a link */}
						{uniqueShelves.map((shelf) => {
							return (
								<article className="shelves-container__card" key={shelf}>
									<NavLink to={`/shelves/${shelf}`}>
										<img
											className="shelves-container__image"
											src={require(`../../assets/images/${shelf}.png`)}
										/>
									</NavLink>
									<span className="shelves__shelf">{shelf}</span>
								</article>
							);
						})}
					</main>
				</>
			) : (
				//If the user has not added any shelves
				<>
					<h1>Your shelves are empty.</h1>
				</>
			)}
		</div>
	);
};

export default ShelfItems;
