import React from "react";
import logoImage from "../assets/logo/BunchofFives_WEB_BW_800x800px.jpg";
// import "../components/LogoComponent.scss";
import { ShelfItemsComponent } from "../components/ShelfItemsComponent/ShelfItemsComponent";
import LogoComponent from "../components/LogoComponent/LogoComponent";
import LoginFormComponent from "../components/LoginFormComponent/LoginFormComponent";
import { CardComponent } from "../components/CardComponent/CardComponent";
import "./HomePage.scss";
import LoginButton from "../components/LoginButton/LoginButton";
import { Header } from "../components/Header/Header";
import { useState } from "react";
import uniqid from "uniqid";
import packs from "../assets/images/packs.png";
import cook from "../assets/images/cook.png";
import optics from "../assets/images/optics.png";
import shelter from "../assets/images/shelter.png";
import sleep from "../assets/images/sleep.jpg";
import { NavLink } from "react-router-dom";

const HomePage = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoggedIn = () => {
		setIsLoggedIn(true);
	};

	console.log("🕵🏻‍♂️ isLoggedIn: ", isLoggedIn); //TODO: remove/comment

	return (
		<div className="home-page">
			<Header handleLoggedIn={handleLoggedIn} />
			{isLoggedIn ? (
				<div>
					<ShelfItemsComponent />
				</div>
			) : (
				<main className="home-page__main-container">
					<h1>Login to view shelves</h1>
					{/* {shelfCards.map((card) => {
						return (
							<CardComponent
								key={uniqid()}
								shelf={card.name}
								image={card.image}
								shelfId={card.shelfId}
							/>
						);
					})} */}
				</main>
			)}
		</div>
	);
};

export default HomePage;
