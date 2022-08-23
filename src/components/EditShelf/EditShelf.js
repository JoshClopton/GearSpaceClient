import React from "react";
import EditForm from "../EditForm/EditForm";
import "./EditShelf.scss";
import { Formik } from "formik";
import axios from "axios";
import { useState } from "react";

const EditShelf = (props) => {
  const { handleShow } = props;
  const [show, setShow] = useState(true);

  // logic to show or hide the Modal
  const toggleModal = show
    ? "modal--display overlay--display"
    : "modal--hide overlay--hide";

  return (
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
          onSubmit={(e) => {
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
          <EditForm />
        </Formik>
        <span className="modal__text"></span>
        <div className="button-container">
          <button onClick={handleShow} className="delete-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditShelf;
