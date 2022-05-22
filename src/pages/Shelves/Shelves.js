import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import "./Shelves.scss";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import { useParams } from "react-router-dom";
import { EditShelfPage } from "../EditShelfPage/EditShelfPage";
import { ModalComponent } from "../../components/ModalComponent/ModalComponent";
// import LoginButton from "../LoginButton/LoginButton";
// import LogoComponent from "../LogoComponent/LogoComponent";
// import "./Header.scss";

export const Shelves = () => {
	let { shelfId } = useParams();

	const [shelfData, setShelfData] = useState(null);
	const [selectedItem, setSelectedItem] = useState(null);

	const handleShowPopup = (itemId) => {
		setSelectedItem(itemId);
	};

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
			{/* {showModal && (
				<EditShelfPage showModal={showModal} handleShow={handleShow} />
			)} */}

			{/* <button onClick={setShowModal(true)}>Edit</button> */}
			{shelfData && shelfData.length ? (
				shelfData.map((shelf) => {
					return (
						<article className="shelves__content-container" key={shelf.id}>
							<button
								onClick={() => {
									handleShowPopup(shelf.id);
								}}
							>
								Edit
							</button>
							<span className="shelves__title">{shelf.shelf}</span>
							<div className="shelves__details-container">
								<div className="shelves__label">Item:</div>
								<div className="shelves__content">{shelf.item}</div>
							</div>
							<div className="shelves__details-container">
								<div className="shelves__label">Item:</div>
								<img
									src={shelf.image}
									alt="stuff"
									className="shelves__image"
								></img>
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
			{selectedItem ? (
				<ModalComponent selectedItem={selectedItem} isCreate={false} />
			) : null}
		</div>
	);
};
