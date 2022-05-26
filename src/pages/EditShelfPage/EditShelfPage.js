import React from "react";
import "./EditShelfPage.scss";
import { Formik, Field, Form, validateYupSchema } from "formik";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { useState } from "react";

export const EditShelfPage = (props) => {
	const { handleShow, showModal, shelf } = props;
	const [show, setShow] = useState(true);

	// logic to show or hide the Modal
	const toggleModal = show ? "modal--display" : "modal--hide";

	// const route = () =>{
	// 	navigate('/')
	// }

	const handleClick = () => {
		handleShow();
		setShow(false);
	};

	return (
		<>
			<div className={toggleModal}>
				<div className="modal">
					{/* <h1 className="modal__title">{productTitle}</h1> */}
					{/* <img className="modal__close-icon" src={productImage} /> */}
					<Formik
						initialValues={{
							picked: "",
							shelf: "",
							item: "",
							// description: "",
							qty: "",
							location: "",
							notes: "",
							image: "",
						}}
						onSubmit={(e, values) => {
							axios
								.put(
									// `http://localhost:8000/shelves/${shelfId}/edit`,
									{
										shelf: e.shelf,
										location: e.location,
										qty: e.qty,
										notes: e.notes,
										// desctiption: e.description,
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
							{/* <label>
								<Field type="radio" name="shelf" value="sleep" />
								Sleep
							</label> */}
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
						<button onClick={handleShow} className="delete-button">
							Cancel
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
