import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ShelfItems.scss";

const ShelfItems = () => {
  //Initialize a variable to hold state for a users shelf inventory
  const [shelfData, setShelfData] = useState(null);
  //On page load send a request to get the users shelf items
  useEffect(() => {
    axios
      .get(`http://localhost:8000/shelves/`, {
        withCredentials: true,
      })
      .then((res) => {
        const shelves = res.data;

        setShelfData(shelves);
      });
  }, []);

  //create an array to hold the shelves that are not duplicates
  let uniqueShelves = [];

  //If a user has shelf data I only want to display one shelf card for each shelf category. Loop through the data and push the shelves into uniqeShelves only one time
  shelfData &&
    shelfData.forEach((item) => {
      if (!uniqueShelves.includes(item.shelf)) {
        uniqueShelves.push(item.shelf);
      }
    });

  if (shelfData && shelfData.length) {
    return (
      <main className="shelves-container">
        {/* map through the uniqueShelves array and for each item create a link */}
        {uniqueShelves.map((shelf) => {
          return (
            <article className="shelves-container__card" key={shelf}>
              <NavLink to={`/shelves/${shelf}`}>
                <img
                  className="shelves-container__image"
                  src={require(`../../assets/images/${shelf}.png`)}
                  alt="Item"
                />
              </NavLink>
              <span className="shelves__shelf">{shelf}</span>
            </article>
          );
        })}
      </main>
    );
  } else {
    <>
      <h1>Your shelves are empty.</h1>
    </>;
  }
};

export default ShelfItems;
