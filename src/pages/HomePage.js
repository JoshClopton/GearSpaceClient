import React from "react";
import ShelfItems from "../components/ShelfItems/ShelfItems";
import "./HomePage.scss";
import { Header } from "../components/Header/Header";
import { useState } from "react";

const HomePage = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoggedIn = () => {
		setIsLoggedIn(true);
	};
	//Toggle class depending on if user is logged in, if so remove the background image and display their shelves
	const removeBackgroundImage = isLoggedIn
		? "remove-background-image"
		: "home-page";
	return (
		<div className={removeBackgroundImage}>
			<Header handleLoggedIn={handleLoggedIn} />
			{isLoggedIn ? (
				<div>
					<ShelfItems />
				</div>
			) : (
				<main className="home-page__main-container">
					{/* ToDo: Add welcome text */}
				</main>
			)}
		</div>
	);
};

export default HomePage;
