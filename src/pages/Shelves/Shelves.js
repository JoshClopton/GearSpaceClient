import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import "./Shelves.scss";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import { useParams } from "react-router-dom";
// import LoginButton from "../LoginButton/LoginButton";
// import LogoComponent from "../LogoComponent/LogoComponent";
// import "./Header.scss";

export const Shelves = () => {
	let { shelfId } = useParams();

	const [shelfItem, setShelfItem] = useState(null);
	const [shelfLocation, setShelfLocation] = useState(null);
	const [shelfNotes, setShelfNotes] = useState(null);
	const [shelfDescription, setShelfDescription] = useState(null);
	const [shelfQty, setShelfQty] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/shelves/${shelfId}`, {
				withCredentials: true,
			})
			.then((res) => {
				console.log("🕵🏻‍♂️ res.data ", res.data); //TODO: remove/comment

				const shelves = res.data;

				shelves.map((shelf) => {
					return (
						setShelfItem(shelf.item),
						setShelfLocation(shelf.location),
						setShelfNotes(shelf.notes),
						setShelfDescription(shelf.description),
						setShelfQty(shelf.qty)
					);
				});
			});
	}, []);

	return (
		<div className="shelves">
			<Header />
			{shelfItem && (
				<article className="shelves__content-container">
					<span className="shelves__title">Packs</span>
					<div className="shelves__details-container">
						<div className="shelves__label">Item:</div>
						<div className="shelves__content">{shelfItem}</div>
					</div>
					<div className="shelves__details-container">
						<div className="shelves__label">Description:</div>
						<div className="shelves__content">{shelfDescription}</div>
					</div>

					<div className="shelves__details-container">
						<div className="shelves__label">Location:</div>
						<div className="shelves__content">{shelfLocation}</div>
					</div>
					<div className="shelves__details-container">
						<div className="shelves__label">Notes:</div>
						<div className="shelves__content">{shelfNotes}</div>
					</div>
					<div className="shelves__details-container">
						<div className="shelves__label">Qty:</div>
						<div className="shelves__content">{shelfQty}</div>
					</div>
				</article>
			)}
		</div>
	);
};
