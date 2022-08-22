import React from "react";
import "./EditShelf.scss";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useState } from "react";

const EditShelf = (props) => {
	const { handleShow } = props;
	const [show, setShow] = useState(true);

	// logic to show or hide the Modal
	const toggleModal = show
		? "modal--display overlay--display"
		: "modal--hide overlay--hide";

	const toggleOverlay = show ? "overlay--display" : "overlay--hide";

	return (
		<>
			<div className={toggleModal}>
				<div className="modal">
					<Formik
						initialValues={{
							picked: "",
							shelf: "",
							item: "",
							qty: "",
							location: "",
							notes: "",
							image: "",
						}}
						onSubmit={(e, values) => {
							axios
								.put(
									{
										shelf: e.shelf,
										location: e.location,
										qty: e.qty,
										notes: e.notes,
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

export default EditShelf;
