import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useParams } from "react";
// import "../../components/";
import { CardComponent } from "../../components/CardComponent/CardComponent";
// import { useParams } from "react-router-dom";
// import LoginButton from "../LoginButton/LoginButton";
// import LogoComponent from "../LogoComponent/LogoComponent";
// import "./Header.scss";

export const ShelfItemsComponent = () => {
	const [shelfData, setShelfData] = useState(null);
	// const { shelfId } = useParams();

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

	return (
		<div className="shelves">
			<Header />
			<main>
				<h1>Your Shelves</h1>
			</main>
			{shelfData &&
				shelfData.map((shelf) => {
					return (
						<article>
							<NavLink to={`/shelves/${shelf.shelf}`}>
								<span>{shelf.shelf}</span>
							</NavLink>
						</article>
					);
				})}
		</div>
	);
};
