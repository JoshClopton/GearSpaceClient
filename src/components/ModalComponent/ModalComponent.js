import React from "react";
import axios from "axios";
import "./ModalComponent.scss";
import { Formik, Field, Form, validateYupSchema } from "formik";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import close from "../../assets/icons/close.svg";

export const ModalComponent = (props) => {
	// handleClose,
	const {
		selectedItem,
		handleCloseModal,
		productTitle,
		productImage,
		isCreate,
		shelfData,
	} = props;
	const [show, setShow] = useState(true);

	const initialFormValues = isCreate
		? {
				shelf: "",
				item: "",
				qty: "",
				location: "",
				notes: "",
				image: "",
		  }
		: {
				shelf: selectedItem.shelf,
				item: selectedItem.item,
				description: selectedItem.description,
				qty: selectedItem.qty,
				location: selectedItem.location,
				notes: selectedItem.notes,
		  };

	return (
		<>
			<div>
				<div className="modal">
					<img
						onClick={handleCloseModal}
						className="modal__close-icon"
						src={close}
					/>
					<div className="modal__contents">
						<section className="modal__item-container">
							<div className="modal__image-container">
								<img
									className="modal__images"
									src={productImage || selectedItem.image}
								/>
							</div>
						</section>
						<Formik
							initialValues={initialFormValues}
							onSubmit={(e, values) => {
								if (isCreate) {
									axios
										.post(
											`http://localhost:8000/shelves`,
											{
												shelf: e.shelf,
												// description: e.description,
												item: productTitle,
												location: e.location,
												qty: e.qty,
												notes: e.notes,
												image: productImage,
											},
											{ withCredentials: true }
										)
										.then(() => {
											handleCloseModal();
										})
										.catch((err) => {
											console.log("Error creating a new post:", err);
										});
								} else {
									axios
										.patch(
											`http://localhost:8000/shelves/edit`,
											{
												shelf: e.shelf,

												// description: e.description,
												location: e.location,
												qty: e.qty,
												notes: e.notes,
												item: selectedItem.id,
											},
											{ withCredentials: true }
										)
										.then(() => {
											handleCloseModal();
										})
										.catch((err) => {
											console.log("Error creating a new post:", err);
										});
								}
							}}
						>
							<Form className="edit-form">
								<h1 className="edit-form__title">
									{productTitle || selectedItem.item}
								</h1>

								<div className="edit-form__selectors">
									<label className="edit-form__labels">
										<Field type="radio" name="shelf" value="shelter" />
										Shelter
									</label>
									<label className="edit-form__labels">
										<Field type="radio" name="shelf" value="cook" />
										Cook
									</label>
									<label className="edit-form__labels">
										<Field type="radio" name="shelf" value="clothing" />
										Clothing
									</label>
									<label className="edit-form__labels">
										<Field type="radio" name="shelf" value="optics" />
										Optics
									</label>
									<label className="edit-form__labels">
										<Field type="radio" name="shelf" value="other-gear" />
										Other Gear
									</label>
								</div>
								<label className="edit-form__labels" htmlFor="qty">
									Quantity
								</label>
								<Field className="edit-form__qty-field" id="qty" name="qty" />
								<label className="edit-form__labels" htmlFor="location">
									Location
								</label>
								<Field
									id="location"
									name="location"
									className="edit-form__location-input"
								/>
								<label className="edit-form__labels" htmlFor="notes">
									Notes
								</label>
								<Field
									id="notes"
									name="notes"
									className="edit-form__notes-input"
								/>
								<div className="button-container">
									<button
										onClick={handleCloseModal}
										className="edit-cancel-button"
										type="button"
									>
										Cancel
									</button>

									<button className="edit-delete-button" type="submit">
										Submit
									</button>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
		</>
	);
};
