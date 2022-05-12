import axios from "axios";
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

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
