import React from "react";
import tentImage from "../../assets/images/tent.png";
import "./CardComponent.scss";

export const CardComponent = () => {
	return (
		<article className="card">
			<Link to={`shelves/${shelf.id}`}>
				{/* card image will be linked to the users shelf table category image */}
				<img className="card__image" src={tentImage} />
			</Link>
			{/* category will be linked to users shelf table category */}
			<div className="card__category">Shelter</div>
		</article>
	);
};
