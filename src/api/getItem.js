// import axios from "axios";
// import React from "react";

// const getItem = (handleCloseModalProp, setLoadingProp) => {
//   return axios
//     .get(
//       "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search",
//       {
//         params: {
//           keyword: "",
//           country: "US",
//           category: "sporting",
//         },
//         headers: {
//           "X-RapidAPI-Host": "amazon-product-reviews-keywords.p.rapidapi.com",
//           "X-RapidAPI-Key":
//             "2edab6dd23msh7b1abb83e1d7a9ep19250bjsn2a09939b82ef",
//         },
//       }
//     )
//     .then(() => {
//       handleCloseModalProp();
//     })
//     .catch((err) => {
//       console.log("Error fetching data:", err);
//     });
//   setLoadingProp(true);
// };

// export default getItem;
