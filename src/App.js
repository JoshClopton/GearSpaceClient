import axios from "axios";
import "./App.scss";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
	useParams,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Shelves } from "./pages/Shelves/Shelves";
import { FormPage } from "./pages/FormPage/FormPage";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>

					<Route path="/shelves">
						<Shelves />
					</Route>

					<Route path="/form-page">
						<FormPage />
					</Route>

					<Route path="shelves/:shelfId">
						<Shelves />
					</Route>

					<Route path="/profile" />
				</Switch>
			</Router>
		</>
	);
};

export default App;
