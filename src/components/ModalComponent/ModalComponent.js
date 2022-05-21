import React from "react";
import axios from "axios";
import "./ModalComponent.scss";
import { Formik, Field, Form, validateYupSchema } from "formik";

import { useEffect, useState } from "react";

export const ModalComponent = (props) => {
	// handleClose,
	const { handleShow, productTitle, productImage } = props;
	const [show, setShow] = useState(true);

	//logic to show or hide the Modal
	const toggleModal = show ? "modal--display" : "modal--hide";

	const handleClick = () => {
		handleShow();
		setShow(false);
	};

	return (
		<>
			<div className={toggleModal}>
				<div className="modal">
					<h1 className="modal__title">{productTitle}</h1>
					<img className="modal__close-icon" src={productImage} />
					<Formik
						initialValues={{
							picked: "",
							shelf: "",
							item: "",
							description: "",
							qty: "",
							location: "",
							notes: "",
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
										image: productImage,
									},
									{ withCredentials: true }
								)
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

							{/* <label htmlFor="item">Item</label> */}
							{/* <Field id="item" name="item" /> */}
							{/* <label htmlFor="description">Description</label> */}
							{/* <Field id="description" name="description" /> */}
							<label htmlFor="qty">Quantity</label>
							<Field id="qty" name="qty" />
							<label htmlFor="location">Location</label>
							<Field id="location" name="location" />
							<label htmlFor="notes">Notes</label>
							<Field id="notes" name="notes" />

							<button type="submit">Submit</button>
						</Form>
					</Formik>

					<span className="modal__text"></span>
					<div className="button-container">
						<button onClick={handleClick} className="delete-button">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
