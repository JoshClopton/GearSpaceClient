import React from "react";
import "./FormPage.scss";
import { Formik, Field, Form, validateYupSchema } from "formik";
import axios from "axios";
import { Header } from "../../components/Header/Header";

export const FormPage = () => {
	return (
		<div>
			<Header />
			<h1>Create a new shelf:</h1>
			<Formik
				initialValues={{
					picked: "",
					shelf: "",
					item: "",
					// description: "",
					qty: "",
					location: "",
					notes: "",
					otherGear: "",
				}}
				onSubmit={(e, values) => {
					axios
						.post(
							`http://localhost:8000/shelves`,
							{
								shelf: e.shelf,
								// description: e.description,
								item: e.item,
								location: e.location,
								qty: e.qty,
								notes: e.notes,
								otherGear: e.otherGear,
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
					{/* <div>Selected: {values.selected}</div> */}

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
		</div>
	);
};
