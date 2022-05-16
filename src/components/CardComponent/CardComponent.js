import React from "react";
import tentImage from "../../assets/images/tent.png";
import "./CardComponent.scss";

export const CardComponent = () => {
	return (
		<article className="card">
			<img className="card__image" src={tentImage} />
			<div className="card__category">Shelter</div>
		</article>
	);
};
