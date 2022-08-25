import React from "react";
import ShelfCategories from "../../components/ShelfCategories/ShelfCategories";
import "./Home.scss";

const Home = ({ isLoggedIn }) => {
  const removeBackgroundImage = isLoggedIn
    ? "remove-background-image"
    : "home-page";
  return (
    <div className={removeBackgroundImage}>
      {isLoggedIn ? (
        <ShelfCategories />
      ) : (
        <main className="home-page__main-container"></main>
      )}
    </div>
  );
};

export default Home;
