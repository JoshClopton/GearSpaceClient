import React from "react";
import axios from "axios";
import { useState } from "react";
import { Header } from "../Header/Header";

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
			.catch((err) => {
				console.log("Error deleting request:", err);
			});
	};

	return (
		<div>
			<h1>Are you sure you want to delete?</h1>
			<button
				onClick={() => {
					deleteItem();
				}}
			>
				Delete
			</button>
			<button onClick={handleCloseModal}></button>
		</div>
	);
};
