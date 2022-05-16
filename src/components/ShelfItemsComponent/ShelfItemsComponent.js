import React from "react";
import { CardComponent } from "../CardComponent/CardComponent";
import "./ShelfItemsComponent.scss";

export const ShelfItemsComponent = () => {
	return (
		<div>
			<CardComponent />
			<span>Short item description </span>
			<span>Qty</span>
		</div>
	);
};
