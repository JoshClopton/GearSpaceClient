import React from "react";
import CreateItemForm from "../CreateItemForm/CreateItemForm";
import "./CreateItem.scss";
import { Formik } from "formik";
import close from "../../assets/icons/close.svg";
import postItem from "../../api/postItem";
import editItem from "../../api/editItem";

const CreateItem = ({
  selectedItem,
  handleCloseModal,
  productTitle,
  productImage,
  isCreate,
}) => {
  const initialFormValues = isCreate
    ? {
        shelf: "",
        item: "",
        qty: "",
        location: "",
        notes: "",
        image: "",
      }
    : {
        shelf: selectedItem.shelf,
        item: selectedItem.item,
        description: selectedItem.description,
        qty: selectedItem.qty,
        location: selectedItem.location,
        notes: selectedItem.notes,
      };

  return (
    <>
      <div>
        <div className="modal">
          <img
            onClick={handleCloseModal}
            className="modal__close-icon"
            src={close}
            alt="close"
          />
          <div className="modal__contents">
            <section className="modal__item-container">
              <div className="modal__image-container">
                <img
                  className="modal__images"
                  src={productImage || selectedItem.image}
                  alt="Product"
                />
              </div>
            </section>
            <Formik
              initialValues={initialFormValues}
              onSubmit={(e) => {
                if (isCreate) {
                  postItem(handleCloseModal, productTitle, productImage, e);
                } else {
                  editItem(e, selectedItem, handleCloseModal);
                }
              }}
            >
              <CreateItemForm
                productTitle={productTitle}
                selectedItem={selectedItem}
                handleCloseModal={handleCloseModal}
              />
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateItem;
