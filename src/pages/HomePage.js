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
		},
		{
			name: "cook",
			image: cook,
		},
		{
			name: "packs",
			image: packs,
		},
		{
			name: "optics",
			image: optics,
		},
		{
			name: "shelter",
			image: shelter,
		},
	];

	//creating a hook
	// const [modal, setModal]=useState(false);

	// const showModal = ()

	return (
		<div className="home-page">
			<Header />
			{shelfCards.map((card) => {
				return (
					<CardComponent key={uniqid()} shelf={card.name} image={card.image} />
				);
			})}
		</div>
	);
};

export default HomePage;
