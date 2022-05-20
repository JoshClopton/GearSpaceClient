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

	const [shelfData, setShelfData] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/shelves/${shelfId}`, {
				withCredentials: true,
			})
			.then((res) => {
				const shelves = res.data;
				console.log("🕵🏻‍♂️ shelves: ", shelves); //TODO: remove/comment

				setShelfData(shelves);
			});
	}, []);

	return (
		<div className="shelves">
			<Header />
			{shelfData ? (
				shelfData.map((shelf) => {
					return (
						<article className="shelves__content-container" key={shelf.id}>
							<span className="shelves__title">{shelf.shelf}</span>
							<div className="shelves__details-container">
								<div className="shelves__label">Item:</div>
								<div className="shelves__content">{shelf.item}</div>
							</div>
							<div className="shelves__details-container">
								<div className="shelves__label">Description:</div>
								<div className="shelves__content">{shelf.description}</div>
							</div>

							<div className="shelves__details-container">
								<div className="shelves__label">Location:</div>
								<div className="shelves__content">{shelf.location}</div>
							</div>
							<div className="shelves__details-container">
								<div className="shelves__label">Notes:</div>
								<div className="shelves__content">{shelf.notes}</div>
							</div>
							<div className="shelves__details-container">
								<div className="shelves__label">Qty:</div>
								<div className="shelves__content">{shelf.qty}</div>
							</div>
						</article>
					);
				})
			) : (
				<p>...Loading</p>
			)}
		</div>
	);
};
