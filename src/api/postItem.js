import axios from "axios";

const postItem = (
  handleCloseModalProp,
  productTitleProp,
  productImageProp,
  e
) => {
  return axios
    .post(
      `http://localhost:8000/shelves`,
      {
        shelf: e.shelf,
        item: productTitleProp,
        location: e.location,
        qty: e.qty,
        notes: e.notes,
        image: productImageProp,
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

export default postItem;
