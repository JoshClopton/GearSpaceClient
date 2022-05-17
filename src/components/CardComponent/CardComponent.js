import React from "react";
import tentImage from "../../assets/images/tent.png";
import "./CardComponent.scss";
import image from "../../assets/images/packs.png";
import shelfCards from "../../data/constants.js";

export const CardComponent = (props) => {
	const { shelf, image } = props;

	return (
		<article className="shelf-card">
			<img src={image} alt="stuff" className="shelf-card__image"></img>
			<div className="shelf-card__category">{shelf}</div>
		</article>
	);
};
