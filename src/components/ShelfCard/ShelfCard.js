import React from "react";
import "./ShelfCard.scss";

const ShelfCard = ({ handleShowDelete, handleShowPopup, shelf }) => {
  return (
    <article className="shelves__content-container" key={shelf.id}>
      <img src={shelf.image} alt="stuff" className="shelves__image" />
      <main className="text-container">
        <div className="shelves__content shelves__item-title">{shelf.item}</div>
        <div className="shelves__qty-location-containter">
          <div className="shelves__details-container">
            <div className="shelves__label">Location:</div>
            <div className="shelves__content">{shelf.location}</div>
          </div>
          <div className="shelves__details-container">
            <div className="shelves__label">Qty:</div>
            <div className="shelves__content">{shelf.qty}</div>
          </div>
        </div>

        <div className="shelves__details-container">
          <div className="shelves__label">Notes:</div>
          <div className="shelves__content">{shelf.notes}</div>
        </div>
        <div className="button">
          <button
            className="button__delete"
            onClick={() => {
              handleShowDelete(shelf.id);
            }}
          >
            Delete
          </button>

          <button
            className="button__edit"
            onClick={() => {
              handleShowPopup(shelf);
            }}
          >
            Edit
          </button>
        </div>
      </main>
    </article>
  );
};

export default ShelfCard;
