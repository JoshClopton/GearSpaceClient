import React from "react";
import axios from "axios";
import "./ModalComponent.scss";
import { Formik, Field, Form, validateYupSchema } from "formik";

// import CancelButton from "../../assets/icons/close-24px.svg";
import { useEffect, useState } from "react";

export const ModalComponent = (props) => {
	// handleClose,
	const { asin, productTitle, productImage } = props;
	const [show, setShow] = useState(true);

	//logic to show or hide the Modal
	const toggleModal = show ? "modal--display" : "modal--hide";

	const addItem = console.log("🕵🏻‍♂️ asin: ", asin); //TODO: remove/comment

	return (
		<>
			<div className={toggleModal}>
				<div className="modal">
					<h1 className="modal__title">{productTitle}</h1>
					<img
						className="modal__close-icon"
						src={productImage}
						// src={CancelButton}
						// onClick={handleClose}
					/>
					<button onClick={() => setShow(false)}>Cancel</button>
					{/* <h1 className="modal__title"> */}
					{/* Delete {deleteWarehouseObject.name} warehouse? */}
					{/* </h1> */}
					<Formik
						initialValues={{
							picked: "",
							shelf: "",
							item: "",
							description: "",
							qty: "",
							location: "",
							notes: "",
							// otherGear: "",
							image: "",
						}}
						onSubmit={(e, values) => {
							axios
								.post(
									`http://localhost:8000/shelves`,
									{
										shelf: e.shelf,
										description: e.description,
										item: productTitle,
										location: e.location,
										qty: e.qty,
										notes: e.notes,
										otherGear: e.otherGear,
										image: productImage,
									},
									{ withCredentials: true }
								)
								// .then(() => {
								//   // Re-fetch the posts
								//   this.props.onPostCreate();
								//   e.target.reset();
								// })
								.catch((err) => {
									console.log("Error creating a new post:", err);
								});
						}}
					>
						<Form>
							<label>
								<Field type="radio" name="shelf" value="shelter" />
								Shelter
							</label>
							<label>
								<Field type="radio" name="shelf" value="cook" />
								Cook
							</label>
							<label>
								<Field type="radio" name="shelf" value="bedding" />
								Bedding
							</label>
							<label>
								<Field type="radio" name="shelf" value="lighting" />
								Lighting
							</label>
							<label>
								<Field type="radio" name="shelf" value="clothing" />
								Clothing
							</label>
							<label>
								<Field type="radio" name="shelf" value="optics" />
								Optics
							</label>
							<label>
								<Field type="radio" name="shelf" value="other-gear" />
								Other Gear
							</label>
							{/* <div>Selected: {values.selected}</div> */}

							<label htmlFor="item">Item</label>
							<Field id="item" name="item" />
							<label htmlFor="description">Description</label>
							<Field id="description" name="description" />
							<label htmlFor="qty">Quantity</label>
							<Field id="qty" name="qty" />
							<label htmlFor="location">Location</label>
							<Field id="location" name="location" />
							<label htmlFor="notes">Notes</label>
							<Field id="notes" name="notes" />

							<button type="submit">Submit</button>
						</Form>
						{/* )} */}
					</Formik>

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
};
