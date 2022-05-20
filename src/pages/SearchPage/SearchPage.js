import React from "react";
import "./SearchPage.scss";
import { Formik, Field, Form, validateYupSchema } from "formik";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { useState } from "react";

export const SearchPage = () => {
	// const [searchData, setSearchData] = useState(null);
	// const [searchImage, setSearchImage] = useState(null);
	const [products, setProducts] = useState(null);
	const options = {
		method: "GET",
		url: "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search",
		params: {
			keyword: "",
			country: "US",
			category: "aps",
		},
		headers: {
			"X-RapidAPI-Host": "amazon-product-reviews-keywords.p.rapidapi.com",
			"X-RapidAPI-Key": "2edab6dd23msh7b1abb83e1d7a9ep19250bjsn2a09939b82ef",
		},
	};
	return (
		<div>
			<Header />
			<h1>Search for your items:</h1>
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
							// setSearchImage(response.data.products);
							// console.log("🕵🏻‍♂️ searchData: ", searchData); //TODO: remove/comment

							// .then(() => {
							//   // Re-fetch the posts
							//   this.props.onPostCreate();
							//   e.target.reset();
						})
						.catch((err) => {
							console.log("Error creating a new post:", err);
						});
				}}
			>
				<Form>
					<label>
						<Field type="input" name="search" />
						Search
					</label>
					<button type="submit">Submit</button>
				</Form>
			</Formik>
			{products ? (
				products.map((product) => {
					return (
						<section>
							<div>{product.title}</div>
							<img src={product.thumbnail} />
						</section>
					);
				})
			) : (
				<>...Loading</>
			)}
		</div>
	);
};
