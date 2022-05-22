import React from "react";
import "./SearchPage.scss";
import { Formik, Field, Form, validateYupSchema } from "formik";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { ModalComponent } from "../../components/ModalComponent/ModalComponent";

export const SearchPage = () => {
	const [products, setProducts] = useState(null);
	const [productTitle, setProductTitle] = useState(null);
	const [productImage, setProductImage] = useState(null);
	const [showModal, setShowModal] = useState(null);

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

	const handleShow = () => {
		setShowModal(false);
	};

	// useEffect(() => {

	// }, [showModal]);

	return (
		<div>
			<Header />
			<h1 className="title">Search for your items:</h1>
			<Formik
				initialValues={{
					search: "",
				}}
				onSubmit={(e, values) => {
					options.params.keyword = e.search;

					axios
						.request(options)
						.then(function (response) {
							console.log("🕵🏻‍♂️ response.data: ", response.data); //TODO: remove/comment

							console.log(
								"🕵🏻‍♂️ response.data.products.title",
								response.data.products
							); //TODO: remove/comment
							const productsResponse = response.data.products;
							setProducts(productsResponse);
							//   e.target.reset();
						})
						.catch((err) => {
							console.log("Error creating a new post:", err);
						});
				}}
			>
				<Form className="form">
					<label>
						<Field type="input" name="search" />
						Search
					</label>
					<button type="submit" className="form__button">
						Submit
					</button>
				</Form>
			</Formik>
			{products ? (
				products.map((product) => {
					return (
						<section className="products">
							<div
								onClick={() => {
									setShowModal(true);
									setProductImage(product.thumbnail);
									setProductTitle(product.title);
								}}
								className="products__title"
							>
								{product.title}
							</div>
							<img src={product.thumbnail} className="products__image" />
						</section>
					);
				})
			) : (
				<>...Loading</>
			)}
			{showModal && (
				<ModalComponent
					productTitle={productTitle}
					productImage={productImage}
					showModal={showModal}
					handleShow={handleShow}
					isCreate={true}
				/>
			)}
		</div>
	);
};
