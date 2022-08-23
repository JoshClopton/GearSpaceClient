// import React from "react";
// import axios from "axios";

// function AxiosPatch({ e, selectedItem, handleCloseModal }) {
// 	return () => {
// 		axios
// 			.patch(
// 				`http://localhost:8000/shelves/edit`,
// 				{
// 					shelf: e.shelf,
// 					location: e.location,
// 					qty: e.qty,
// 					notes: e.notes,
// 					item: selectedItem.id,
// 				},
// 				{ withCredentials: true }
// 			)
// 			.then(() => {
// 				handleCloseModal();
// 			})
// 			.catch((err) => {
// 				console.log("Error creating a new post:", err);
// 			});
// 	};
// }

// export default AxiosPatch;
