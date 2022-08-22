import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Shelves } from "./pages/Shelves/Shelves";
import { FormPage } from "./pages/FormPage/FormPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import ShelfItems from "./components/ShelfItems/ShelfItems";
import { EditShelfPage } from "./pages/EditShelfPage/EditShelfPage";
//ToDo: Do I need profile route?

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
						<ShelfItems />
					</Route>
					<Route path="/form-page">
						<FormPage />
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
