import React from "react";
import "./Search.scss";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useState } from "react";
import CreateItem from "../../components/CreateItem/CreateItem";
import gearSpinner from "../../assets/images/gear-spinner.svg";

const Search = () => {
  const [products, setProducts] = useState(null);
  const [productTitle, setProductTitle] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [loading, setLoading] = useState(null);

  const options = {
    method: "GET",
    url: "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search",
    params: {
      keyword: "",
      country: "US",
      category: "sporting",
    },
    headers: {
      "X-RapidAPI-Host": "amazon-product-reviews-keywords.p.rapidapi.com",
      "X-RapidAPI-Key": "2edab6dd23msh7b1abb83e1d7a9ep19250bjsn2a09939b82ef",
    },
  };
  const handleSubmit = (e) => {
    options.params.keyword = e.search;

    axios
      .request(options)
      .then(function (response) {
        const productsResponse = response.data.products;
        setProducts(productsResponse);
        setLoading(false);
      })
      .then(handleCloseModal)
      .catch((err) => {
        console.log("Error creating a new post:", err);
      });
    setLoading(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleOverlay = showModal ? "overlay--display" : "overlay--hide";

  return (
    <div>
      <div className={toggleOverlay} />

      <main className="search-page">
        <h1 className="search-page__title">FIND YOUR GEAR</h1>
        <Formik
          initialValues={{
            search: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <Field
              type="input"
              name="search"
              className="form__input"
              placeholder="search"
            />

            <button type="submit" className="form__button" />
          </Form>
        </Formik>
        {loading ? (
          <img src={gearSpinner} className="gear-spinner" alt="Loading" />
        ) : null}
        <section className="products-container">
          {products ? (
            products.map((product) => {
              return (
                <section
                  key={product.asin}
                  className="card"
                  onClick={() => {
                    setShowModal(true);
                    setProductImage(product.thumbnail);
                    setProductTitle(product.title);
                  }}
                >
                  <img
                    src={product.thumbnail}
                    className="card__image"
                    alt={product.title}
                  />
                  <div className="card__title">{product.title}</div>
                </section>
              );
            })
          ) : (
            <></>
          )}
          {showModal && (
            <CreateItem
              productTitle={productTitle}
              productImage={productImage}
              showModal={showModal}
              handleCloseModal={handleCloseModal}
              isCreate={true}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default Search;
