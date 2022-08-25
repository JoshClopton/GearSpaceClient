// import React from "react";
// import { Formik, Form, Field } from "formik";
// import close from "../../assets/icons/close.svg";
// import postItem from "../../api/postItem";
// import editItem from "../../api/editItem";

// function validateNotes(value) {
//   let error;
//   if (!value) {
//     error = "Required";
//   } else if (!/^[A-Z0-9._%+-]$/i.test(value)) {
//     error = "Invalid input";
//   }
//   return error;
// }

// const FormikCreateForm = ({
//   selectedItem,
//   handleCloseModal,
//   productTitle,
//   productImage,
//   isCreate,
// }) => {
//   const initialFormValues = isCreate
//     ? {
//         shelf: "",
//         item: "",
//         qty: "",
//         location: "",
//         notes: "",
//         image: "",
//       }
//     : {
//         shelf: selectedItem.shelf,
//         item: selectedItem.item,
//         description: selectedItem.description,
//         qty: selectedItem.qty,
//         location: selectedItem.location,
//         notes: selectedItem.notes,
//       };

//   // function formInput(value) {
//   //   let error;
//   //   if (!value) {
//   //     error = 'Required';
//   //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//   //     error = 'Invalid email address';
//   //   }
//   //   return error;
//   // }

//   return (
//     <>
//       <div>
//         <div className="modal">
//           <img
//             onClick={handleCloseModal}
//             className="modal__close-icon"
//             src={close}
//             alt="close"
//           />
//           <div className="modal__contents">
//             <section className="modal__item-container">
//               <div className="modal__image-container">
//                 <img
//                   className="modal__images"
//                   src={productImage || selectedItem.image}
//                   alt="Product"
//                 />
//               </div>
//             </section>
//             <Formik
//               initialValues={initialFormValues}
//               onSubmit={(e) => {
//                 if (isCreate) {
//                   postItem(handleCloseModal, productTitle, productImage, e);
//                 } else {
//                   editItem(e, selectedItem, handleCloseModal);
//                 }
//               }}
//             >
//               {({ errors, touched, isValidating }) => (
//                 <Form className="edit-form">
//                   <h1 className="edit-form__title">
//                     {productTitle || selectedItem.item}
//                   </h1>

//                   <div className="edit-form__selectors">
//                     <label className="edit-form__labels">
//                       <Field type="radio" name="shelf" value="shelter" />
//                       Shelter
//                     </label>
//                     <label className="edit-form__labels">
//                       <Field type="radio" name="shelf" value="cook" />
//                       Cook
//                     </label>
//                     <label className="edit-form__labels">
//                       <Field type="radio" name="shelf" value="clothing" />
//                       Clothing
//                     </label>
//                     <label className="edit-form__labels">
//                       <Field type="radio" name="shelf" value="optics" />
//                       Optics
//                     </label>
//                     <label className="edit-form__labels">
//                       <Field type="radio" name="shelf" value="packs" />
//                       Packs
//                     </label>

//                     <label className="edit-form__labels">
//                       <Field type="radio" name="shelf" value="other-gear" />
//                       Other Gear
//                     </label>
//                   </div>
//                   <label className="edit-form__labels" htmlFor="qty">
//                     Quantity
//                   </label>
//                   <Field className="edit-form__qty-field" id="qty" name="qty" />
//                   <label className="edit-form__labels" htmlFor="location">
//                     Location
//                   </label>
//                   <Field
//                     id="location"
//                     name="location"
//                     className="edit-form__location-input"
//                   />
//                   <label className="edit-form__labels" htmlFor="notes">
//                     Notes
//                   </label>
//                   <Field
//                     validate={validateNotes}
//                     id="notes"
//                     name="notes"
//                     className="edit-form__notes-input"
//                   />
//                   {errors.notes && touched.notes && <div>{errors.notes}</div>}
//                   <div className="edit__button-container">
//                     <button
//                       onClick={handleCloseModal}
//                       className="edit-cancel-button"
//                       type="button"
//                     >
//                       Cancel
//                     </button>

//                     <button className="edit-delete-button" type="submit">
//                       Submit
//                     </button>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FormikCreateForm;
