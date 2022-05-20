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

export const Shelves = (props) => {
	const { shelfId } = useParams();

	const [shelfItem, setShelfItem] = useState(null);
	const [shelfLocation, setShelfLocation] = useState(null);
	const [shelfNotes, setShelfNotes] = useState(null);
	const [shelfDescription, setShelfDescription] = useState(null);
	const [shelves, setShelves] = useState(null);

	// let { shelfId } = useParams();

	// const handleClick = () => {
	// 	// console.log(id);
	// 	axios
	// 		.get("http://localhost:8000/shelves", { withCredentials: true })
	// 		.then((res) => {
	// 			console.log("🕵🏻‍♂️ res: ", res); //TODO: remove/comment

	// 			console.log("🕵🏻‍♂️ res.data[0].item: ", res.data[0].item); //TODO: remove/comment
	// 		});
	// };

	useEffect(() => {
		axios
			.get(`http://localhost:8000/shelves/${shelfId}`, {
				withCredentials: true,
			})
			.then((res) => {
				console.log("🕵🏻‍♂️ res: ", res); //TODO: remove/comment

				// console.log("🕵🏻‍♂️ res.data[0].item: ", res.data[0].item); //TODO: remove/comment

				setShelfItem(res.data[0].item);
				setShelfLocation(res.data[0].location);
				setShelfNotes(res.data[0].notes);
				setShelfDescription(res.data[0].description);
				//TODO: remove/comment
			});
	}, []);

	return (
		<div className="shelves">
			<Header />
			{shelfItem && (
				<article className="shelves__content-container">
					{/* <div className="shelf-card__content-container">
								<img
									// onClick={handleClick}
									src={image}
									alt="stuff"
									className="shelf-card__image"
								></img> */}
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

					{/* {shelves} */}
				</article>
			)}
		</div>
	);
};
