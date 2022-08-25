import axios from "axios";
const deleteItem = (itemToDeleteProp, handleCloseModalProp) => {
  axios
    .delete(`http://localhost:8000/shelves/delete`, {
      data: {
        id: itemToDeleteProp,
      },
      withCredentials: true,
    })
    .then(() => {
      handleCloseModalProp();
    })
    .catch((err) => {
      console.log("Error deleting request:", err);
    });
};

export default deleteItem;
