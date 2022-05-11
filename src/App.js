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

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact />
				</Switch>
			</Router>
			"hello world"
		</>
	);
};

export default App;
