import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useParams } from "react";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import cook from "../../assets/images/cook.png";
import optics from "../../assets/images/optics.png";
import packs from "../../assets/images/packs.png";
import shelter from "../../assets/images/shelter.png";
import sleep from "../../assets/images/sleep.jpg";
import otherGear from "../../assets/images/other-gear.png";
import clothing from "../../assets/images/clothing.png";
import bedding from "../../assets/images/bedding.png";
import "./ShelfItemsComponent.scss";

export const ShelfItemsComponent = () => {
	const [shelfData, setShelfData] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/shelves/`, {
				withCredentials: true,
			})
			.then((res) => {
				const shelves = res.data;
				console.log("🕵🏻‍♂️ shelves: ", shelves); //TODO: remove/comment
				setShelfData(shelves);
				// setShelfData(shelves);
			});
	}, []);

	//create an array to hold the shelves that are not duplicates
	let uniqueShelves = [];

	//if there is shelfData then loop through the data and push the shelves into uniqeShelves only one time
	shelfData &&
		shelfData.forEach((item) => {
			if (!uniqueShelves.includes(item.shelf)) {
				uniqueShelves.push(item.shelf);
			}
		});
	console.log("🕵🏻‍♂️ shelfData: ", shelfData); //TODO: remove/comment

	return (
		<div>
			{/* make sure shelfData is not null and that it has something in the array */}
			{shelfData && shelfData.length ? (
				<main className="shelves">
					<h1>Your Shelves</h1>

					{/* map through the uniqueShelves array and for each item create a link */}
					{uniqueShelves.map((shelf) => {
						console.log("🕵🏻‍♂️ shelf: ", shelf); //TODO: remove/comment

						return (
							<NavLink to={`/shelves/${shelf}`}>
								<article className="shelves__card" key={shelf}>
									<img
										className="shelves__image"
										src={require(`../../assets/images/${shelf}.png`)}
									/>
									<span className="shelves__shelf">{shelf}</span>
								</article>
							</NavLink>
						);
					})}
				</main>
			) : (
				<>
					<h1>Your shelves are empty.</h1>
					<NavLink to="/search">Create</NavLink>
				</>
			)}
		</div>
	);
};
