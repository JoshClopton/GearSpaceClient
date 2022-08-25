import axios from "axios";

const editItem = (e, selectedItemProp, handleCloseModalProp) => {
  return axios
    .patch(
      `http://localhost:8000/shelves/edit`,
      {
        shelf: e.shelf,
        location: e.location,
        qty: e.qty,
        notes: e.notes,
        item: selectedItemProp.id,
      },
      { withCredentials: true }
    )
    .then(() => {
      handleCloseModalProp();
    })
    .catch((err) => {
      console.log("Error creating a new post:", err);
    });
};

export default editItem;
