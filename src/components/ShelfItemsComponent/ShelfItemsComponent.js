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
import cook from "../../assets/images/cook.png";
import optics from "../../assets/images/optics.png";
import packs from "../../assets/images/packs.png";
import shelter from "../../assets/images/shelter.png";
import sleep from "../../assets/images/sleep.jpg";

export const ShelfItemsComponent = () => {
	const [shelfData, setShelfData] = useState(null);
	const shelfCards = {
		shelter: "shelter",
		cook: "cook",
		lighting: "lighting",
		clothing: "clothing",
		bedding: "bedding",
		misc: "misc",
		packs: "packs",
	};

	const fetchImage = (arr) => {
		arr.forEach((element) => {
			if (element in shelfCards) {
				return <img src={element} />;
			}
		});
	};

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
			{shelfData && shelfData.length ? (
				<>
					<main>
						<h1>Your Shelves</h1>
					</main>
					{shelfData.map((shelf) => {
						console.log("🕵🏻‍♂️ shelf: ", shelf); //TODO: remove/comment

						return (
							<article>
								<NavLink to={`/shelves/${shelf.shelf}`}>
									{/* <img src={shelf.shelf} /> */}
									{/* {fetchImage(shelf)} */}
									<span>{shelf.shelf}</span>
								</NavLink>
							</article>
						);
					})}
				</>
			) : (
				<>
					<h1>Your shelves are empty.</h1>
					<NavLink to="/search">Create</NavLink>
				</>
			)}
		</div>
	);
};
