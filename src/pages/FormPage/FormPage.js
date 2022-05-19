import React from "react";
import "./FormPage.scss";
import { Formik, Field, Form } from "formik";

export const FormPage = () => {
	return (
		<div>
			<h1>Create a new shelf:</h1>
			<Formik
				initialValues={{
					shelf: "",
					item: "",
					description: "",
				}}
				onSubmit={(e) => {
					console.log(e);
				}}
			>
				<Form>
					<label htmlFor="shelf">Shelf</label>
					<Field id="shelf" name="shelf" />
					<label htmlFor="item">Item</label>
					<Field id="item" name="item" />
					<label htmlFor="description">Description</label>
					<Field id="description" name="description" />
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

{
	/* <h1>Sign Up</h1>
<Formik
  initialValues={{
    firstName: '',
    lastName: '',
    email: '',
  }}
  onSubmit={async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  }}
>
  <Form>
    <label htmlFor="firstName">First Name</label>
    <Field id="firstName" name="firstName" placeholder="Jane" />

    <label htmlFor="lastName">Last Name</label>
    <Field id="lastName" name="lastName" placeholder="Doe" />

    <label htmlFor="email">Email</label>
    <Field
      id="email"
      name="email"
      placeholder="jane@acme.com"
      type="email"
    />
    <button type="submit">Submit</button>
  </Form>
</Formik>
</div> */
}
