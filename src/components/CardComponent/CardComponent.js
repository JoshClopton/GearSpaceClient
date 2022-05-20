import React, { useState, useEffect } from "react";
import "./CardComponent.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
// import axios from "axios";

export const CardComponent = (props) => {
	// const [shelves, setShelves] = useState([]);
	const { shelf, image, shelfId } = props;

	return (
		<article className="shelf-card">
			<NavLink className="nav-link" to={`/shelves/${shelfId}`}>
				<div className="shelf-card__content-container">
					<img
						// onClick={handleClick}
						src={image}
						alt="stuff"
						className="shelf-card__image"
					></img>
					<div className="shelf-card__category">{shelf}</div>

					{/* {shelves} */}
				</div>
			</NavLink>
		</article>
	);
};
