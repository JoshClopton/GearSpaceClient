import React from "react";
import axios from "axios";
import CreateItemForm from "../CreateItemForm/CreateItemForm";
import "./CreateItem.scss";
import { Formik } from "formik";
import close from "../../assets/icons/close.svg";

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
                  axios
                    .post(
                      `http://localhost:8000/shelves`,
                      {
                        shelf: e.shelf,
                        item: productTitle,
                        location: e.location,
                        qty: e.qty,
                        notes: e.notes,
                        image: productImage,
                      },
                      { withCredentials: true }
                    )
                    .then(() => {
                      handleCloseModal();
                    })
                    .catch((err) => {
                      console.log("Error creating a new post:", err);
                    });
                } else {
                  axios
                    .patch(
                      `http://localhost:8000/shelves/edit`,
                      {
                        shelf: e.shelf,
                        location: e.location,
                        qty: e.qty,
                        notes: e.notes,
                        item: selectedItem.id,
                      },
                      { withCredentials: true }
                    )
                    .then(() => {
                      handleCloseModal();
                    })
                    .catch((err) => {
                      console.log("Error creating a new post:", err);
                    });
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
