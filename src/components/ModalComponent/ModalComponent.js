import React from "react";
import axios from "axios";
import "./ModalComponent.scss";
// import CancelButton from "../../assets/icons/close-24px.svg";
import { useEffect, useState } from "react";

function ModalComponent({
	show = true,
	// handleClose,
	asin,
	productTitle,
	productImage,
	// handleDelete,
	// deleteWarehouseObject,
}) {
	// useEffect(() => {
	// 	const options = {
	// 		method: "GET",
	// 		url: "https://amazon-product-reviews-keywords.p.rapidapi.com/product/details",
	// 		params: { asin: asin, country: "US", category: "sporting" },
	// 		headers: {
	// 			"X-RapidAPI-Host": "amazon-product-reviews-keywords.p.rapidapi.com",
	// 			"X-RapidAPI-Key": "2edab6dd23msh7b1abb83e1d7a9ep19250bjsn2a09939b82ef",
	// 		},
	// 	};

	// 	axios
	// 		.request(options)
	// 		.then(function (response) {
	// 			console.log("🕵🏻‍♂️ response.data: ", response.data); //TODO: remove/comment
	// 		})
	// 		.catch(function (error) {
	// 			console.error(error);
	// 		});
	// }, []);

	//logic to show or hide the Modal
	const toggleModal = show ? "modal--display" : "modal--hide";

	// if (!show) {
	// 	return;
	// }
	console.log("🕵🏻‍♂️ asin: ", asin); //TODO: remove/comment

	return (
		<>
			<div className={toggleModal}>
				<div className="modal">
					<h1>{productTitle}</h1>
					<img
						className="modal__close-icon"
						src={productImage}
						// src={CancelButton}
						// onClick={handleClose}
					/>
					{/* <h1 className="modal__title"> */}
					{/* Delete {deleteWarehouseObject.name} warehouse? */}
					{/* </h1> */}
					<span className="modal__text">
						{/* Please confirm that you’d like to delete the{" "} */}
						{/* {deleteWarehouseObject.name} warehouse from the list of warehouses. */}
						{/* You won’t be able to undo this action. */}
					</span>
					<div className="button-container">
						{/* <button onClick={handleClose} className="cancel-button"> */}
						{/* Cancel */}
						{/* </button> */}

						{/* <button
							onClick={() => {
								// handleDelete(deleteWarehouseObject.id);
							}}
							className="delete-button"
						>
							Delete
						</button> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default ModalComponent;
