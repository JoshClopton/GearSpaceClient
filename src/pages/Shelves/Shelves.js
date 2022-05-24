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
import { ConfirmDeleteModal } from "../../components/ConfirmDeleteModal/ConfirmDeleteModal";

export const Shelves = () => {
	let { shelfId } = useParams();

	//response from axios call to grag all shelves for a particular user
	const [shelfData, setShelfData] = useState(null);
	//selectedItem is for setting state to be the item that is selected when the user clicks edit
	const [selectedItem, setSelectedItem] = useState(null);
	//changes state when the user clicks the delete button
	const [itemToDelete, setItemToDelete] = useState(null);
	//this function gets called when a user clicks edit. It sets state to be the selected item
	const handleShowPopup = (itemId) => {
		setSelectedItem(itemId);
	};
	//when user clicks the delete button it calls this function and passes in the selected item.
	const handleShowDelete = (itemId) => {
		setItemToDelete(itemId);
	};

	const handleCloseModal = () => {
		setSelectedItem(false);
		setItemToDelete(false);
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
				console.log("🕵🏻‍♂️ shelfData: ", shelfData); //TODO: remove/comment
			});
	}, [selectedItem, itemToDelete]);
	console.log("🕵🏻‍♂️ shelfData: ", shelfData); //TODO: remove/comment

	return (
		<div className="shelves">
			<Header />
			{shelfData && shelfData.length ? (
				<span className="shelves__title">{shelfData[0].shelf}</span>
			) : null}
			<div className="shelves__main">
				{shelfData && shelfData.length ? (
					shelfData.map((shelf) => {
						return (
							<article className="shelves__content-container" key={shelf.id}>
								<img
									src={shelf.image}
									alt="stuff"
									className="shelves__image"
								></img>
								<main className="text-container">
									<div className="shelves__content">{shelf.item}</div>

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
									<div className="button">
										<button
											className="button__delete"
											onClick={() => {
												handleShowDelete(shelf.id);
											}}
										>
											Delete
										</button>
										<button
											className="button__edit"
											onClick={() => {
												handleShowPopup(shelf);
											}}
										>
											Edit
										</button>
									</div>
								</main>
							</article>
						);
					})
				) : (
					<p>...Loading</p>
				)}
				{selectedItem ? (
					<ModalComponent
						selectedItem={selectedItem}
						isCreate={false}
						handleCloseModal={handleCloseModal}
						shelfData={shelfData}
					/>
				) : null}

				{itemToDelete ? (
					<ConfirmDeleteModal
						itemToDelete={itemToDelete}
						shelfData={shelfData}
						handleCloseModal={handleCloseModal}
					/>
				) : null}
			</div>
		</div>
	);
};
