import React from "react";
import "./SearchPage.scss";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { ModalComponent } from "../../components/ModalComponent/ModalComponent";
import gearSpinner from "../../assets/images/gear-spinner.svg";

export const SearchPage = () => {
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

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			<Header />
			<main className="search-page">
				<h1 className="search-page__title">FIND YOUR GEAR</h1>
				<Formik
					initialValues={{
						search: "",
					}}
					onSubmit={(e) => {
						options.params.keyword = e.search;

						axios
							.request(options)
							.then(function (response) {
								const productsResponse = response.data.products;
								setProducts(productsResponse);
								setLoading(false);
							})
							.then(() => {
								handleCloseModal();
							})
							.catch((err) => {
								console.log("Error creating a new post:", err);
							});
						setLoading(true);
					}}
				>
					<Form className="form">
						<Field
							type="input"
							name="search"
							className="form__input"
							placeholder="search"
						/>

						<button type="submit" className="form__button"></button>
					</Form>
				</Formik>
				{loading ? <img src={gearSpinner} className="gear-spinner" /> : null}
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
									<img src={product.thumbnail} className="card__image" />
									<div className="card__title">{product.title}</div>
								</section>
							);
						})
					) : (
						<></>
					)}
					{showModal && (
						<ModalComponent
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
