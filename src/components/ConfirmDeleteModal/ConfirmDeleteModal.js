import React from "react";
import axios from "axios";
import close from "../../assets/icons/close.svg";
import "./ConfirmDeleteModal.scss";
import { API_URL } from "../../config/index";

export const ConfirmDeleteModal = (props) => {
	const { handleCloseModal, itemToDelete } = props;

	const deleteItem = () => {
		axios
			.delete(`${API_URL}/shelves/delete`, {
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
