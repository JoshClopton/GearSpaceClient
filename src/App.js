import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Shelves } from "./pages/Shelves/Shelves";
import { FormPage } from "./pages/FormPage/FormPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { ShelfItemsComponent } from "./components/ShelfItemsComponent/ShelfItemsComponent";
import { EditShelfPage } from "./pages/EditShelfPage/EditShelfPage";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>

					<Route path="/shelves/:shelfId/edit">
						<EditShelfPage />
					</Route>

					<Route path="/shelves/:shelfId">
						<Shelves />
					</Route>

					<Route path="/shelves">
						<ShelfItemsComponent />
					</Route>

					<Route path="/form-page">
						<FormPage />
					</Route>
					<Route path="/search">
						<SearchPage />
					</Route>

					<Route path="/profile" />
				</Switch>
			</Router>
		</>
	);
};

export default App;
