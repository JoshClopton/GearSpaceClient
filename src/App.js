import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shelves from "./pages/Shelves/Shelves";
import Search from "./pages/Search/Search";
import Header from "./components/Header/Header";
import { useState } from "react";

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
						<Home isLoggedIn={isLoggedIn} />
					</Route>
					<Route path="/shelves/:shelfId">
						<Shelves />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
