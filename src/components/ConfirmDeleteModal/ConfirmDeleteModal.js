import React from "react";
import axios from "axios";
import close from "../../assets/icons/close.svg";
import "./ConfirmDeleteModal.scss";

const ConfirmDeleteModal = ({ handleCloseModal, itemToDelete }) => {
  const deleteItem = () => {
    axios
      .delete(`http://localhost:8000/shelves/delete`, {
        data: {
          id: itemToDelete,
        },
        withCredentials: true,
      })
      .then(() => {
        handleCloseModal();
      })
      .catch((err) => {
        console.log("Error deleting request:", err);
      });
  };

  return (
    <div className="delete-modal">
      <img
        onClick={handleCloseModal}
        className="modal__close-icon"
        src={close}
        alt="close"
      />

      <h1 className="delete-modal__title">Are you sure you want to delete?</h1>
      <div className="delete-button-container">
        <button className="confirm-cancel-button" onClick={handleCloseModal}>
          Cancel
        </button>
        <button
          className="confirm-delete-button"
          onClick={() => {
            deleteItem();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
