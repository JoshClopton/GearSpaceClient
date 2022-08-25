import React from "react";
import close from "../../assets/icons/close.svg";
import "./ConfirmDeleteModal.scss";
import deleteItem from "../../api/api";

const ConfirmDeleteModal = ({ handleCloseModal, itemToDelete }) => {
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
            deleteItem(itemToDelete, handleCloseModal);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
