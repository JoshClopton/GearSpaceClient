import React from "react";
import axios from "axios";
import "./ModalComponent.scss";
import CancelButton from "../../assets/icons/close-24px.svg";

function ModalComponent({
	show,
	handleClose,
	handleDelete,
	deleteWarehouseObject,
}) {
	//logic to show or hide the Modal
	const toggleModal = show ? "modal--display" : "modal--hide";

	if (!show) {
		return;
	}

	return (
		<>
			<div className={toggleModal}>
				<div className="modal">
					<img
						className="modal__close-icon"
						src={CancelButton}
						onClick={handleClose}
					/>
					<h1 className="modal__title">
						Delete {deleteWarehouseObject.name} warehouse?
					</h1>
					<span className="modal__text">
						Please confirm that you’d like to delete the{" "}
						{deleteWarehouseObject.name} warehouse from the list of warehouses.
						You won’t be able to undo this action.
					</span>
					<div className="button-container">
						<button onClick={handleClose} className="cancel-button">
							Cancel
						</button>

						<button
							onClick={() => {
								handleDelete(deleteWarehouseObject.id);
							}}
							className="delete-button"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ModalComponent;
