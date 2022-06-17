import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { API_URL } from "../../config/index";

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
					qty: "",
					location: "",
					notes: "",
					otherGear: "",
				}}
				onSubmit={(e) => {
					axios
						.post(
							`${API_URL}/shelves`,
							{
								shelf: e.shelf,
								item: e.item,
								location: e.location,
								qty: e.qty,
								notes: e.notes,
								otherGear: e.otherGear,
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
			</Formik>
		</div>
	);
};
