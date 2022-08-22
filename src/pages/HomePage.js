import React from "react";
import ShelfItems from "../components/ShelfItems/ShelfItems";
import "./HomePage.scss";

const HomePage = ({ isLoggedIn }) => {
	const removeBackgroundImage = isLoggedIn
		? "remove-background-image"
		: "home-page";
	return (
		<div className={removeBackgroundImage}>
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
