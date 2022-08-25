import React from "react";

function EditForm() {
  return (
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
        <Field type="radio" name="shelf" value="packs" />
        Packs
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
  );
}

export default EditForm;
