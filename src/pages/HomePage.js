import React from "react";
import logoImage from "../assets/logo/BunchofFives_WEB_BW_800x800px.jpg";
// import "../components/LogoComponent.scss";
import LogoComponent from "../components/LogoComponent/LogoComponent";
import LoginFormComponent from "../components/LoginFormComponent/LoginFormComponent";
import { CardComponent } from "../components/CardComponent/CardComponent";
import "./HomePage.scss";
import LoginButton from "../components/LoginButton/LoginButton";
import { Header } from "../components/Header/Header";
import uniqid from "uniqid";
import packs from "../assets/images/packs.png";
import cook from "../assets/images/cook.png";
import optics from "../assets/images/optics.png";
import shelter from "../assets/images/shelter.png";
import sleep from "../assets/images/sleep.jpg";

const HomePage = () => {
	const shelfCards = [
		{
			name: "sleep",
			image: sleep,
			shelfId: "sleep",
		},
		{
			name: "cook",
			image: cook,
			shelfId: "cook",
		},
		{
			name: "packs",
			image: packs,
			shelfId: "packs",
		},
		{
			name: "optics",
			image: optics,
			shelfId: "optics",
		},
		{
			name: "shelter",
			image: shelter,
			shelfId: "shelter",
		},
		{
			name: "other-gear",
			image: cook,
			shelfId: "other-gear",
		},
	];

	return (
		<div className="home-page">
			<Header />
			<main className="home-page__main-container">
				{shelfCards.map((card) => {
					return (
						<CardComponent
							key={uniqid()}
							shelf={card.name}
							image={card.image}
							shelfId={card.shelfId}
						/>
					);
				})}
			</main>
		</div>
	);
};

export default HomePage;
