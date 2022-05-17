import React from "react";
import "./CardComponent.scss";

export const CardComponent = (props) => {
	const { shelf, image } = props;

	return (
		<article className="shelf-card">
			<img src={image} alt="stuff" className="shelf-card__image"></img>
			<div className="shelf-card__category">{shelf}</div>
		</article>
	);
};
