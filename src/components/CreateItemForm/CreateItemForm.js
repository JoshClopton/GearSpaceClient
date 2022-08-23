import React from "react";
import "./CreateItemForm.scss";
import { Field, Form } from "formik";

function CreateItemForm({ productTitle, selectedItem, handleCloseModal }) {
	return (
		<Form className="edit-form">
			<h1 className="edit-form__title">{productTitle || selectedItem.item}</h1>

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
					<Field type="radio" name="shelf" value="packs" />
					Packs
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
			<Field id="notes" name="notes" className="edit-form__notes-input" />
			<div className="edit__button-container">
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
	);
}

export default CreateItemForm;
