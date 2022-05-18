import React from "react";
import "./CardComponent.scss";
import { NavLink } from "react-router-dom";

export const CardComponent = (props) => {
	const { shelf, image } = props;

	return (
		<article className="shelf-card">
			<div className="shelf-card__content-container">
				<img src={image} alt="stuff" className="shelf-card__image"></img>
				<div className="shelf-card__category">{shelf}</div>
			</div>
		</article>
	);
};
