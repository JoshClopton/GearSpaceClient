import React from "react";
import ShelfItems from "../../components/ShelfItems/ShelfItems";
import "./Home.scss";

const Home = ({ isLoggedIn }) => {
  const removeBackgroundImage = isLoggedIn
    ? "remove-background-image"
    : "home-page";
  return (
    <div className={removeBackgroundImage}>
      {isLoggedIn ? (
        <ShelfItems />
      ) : (
        <main className="home-page__main-container"></main>
      )}
    </div>
  );
};

export default Home;
