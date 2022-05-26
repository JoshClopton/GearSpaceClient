import React from "react";
import axios from "axios";
import { useState } from "react";
import { Header } from "../Header/Header";
import close from "../../assets/icons/close.svg";
import "./ConfirmDeleteModal.scss";

export const ConfirmDeleteModal = (props) => {
	const { handleCloseModal, selectedItem, itemToDelete, shelfData } = props;
	console.log("🕵🏻‍♂️ shelfData: ", shelfData); //TODO: remove/comment

	console.log("🕵🏻‍♂️ selectedItem: ", selectedItem); //TODO: remove/comment

	const deleteItem = () => {
		console.log("🕵🏻‍♂️ itemToDelete: ", itemToDelete); //TODO: remove/comment
		axios
			.delete(`http://localhost:8000/shelves/delete`, {
				data: {
					id: itemToDelete,
				},
				withCredentials: true,
			})
			.then(() => {
				handleCloseModal();
			})
			.catch((err) => {
				console.log("Error deleting request:", err);
			});
	};

	return (
		<div className="delete-modal">
			<img
				onClick={handleCloseModal}
				className="modal__close-icon"
				src={close}
			/>

			<h1 className="delete-modal__title">Are you sure you want to delete?</h1>
			<div className="delete-button-container">
				<button className="confirm-cancel-button" onClick={handleCloseModal}>
					Cancel
				</button>
				<button
					className="confirm-delete-button"
					onClick={() => {
						deleteItem();
					}}
				>
					Delete
				</button>
			</div>
		</div>
	);
};
