import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shelves from "./pages/Shelves/Shelves";
import SearchPage from "./pages/SearchPage/SearchPage";
import Header from "./components/Header/Header";
import { useState, useCallback } from "react";

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoggedIn = () => {
		setIsLoggedIn(true);
	};

	const handleLoggedOut = () => {
		setIsLoggedIn(false);
	};

	return (
		<>
			<Router>
				<Header
					handleLoggedIn={handleLoggedIn}
					handleLoggedOut={handleLoggedOut}
					isLoggedIn={isLoggedIn}
				/>
				<Switch>
					<Route path="/" exact>
						<HomePage isLoggedIn={isLoggedIn} />
					</Route>
					<Route path="/shelves/:shelfId">
						<Shelves />
					</Route>
					<Route path="/search">
						<SearchPage />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
