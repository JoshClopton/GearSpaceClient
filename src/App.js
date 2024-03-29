import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ShelfItemsDetails from "./pages/ShelfItemsDetails/ShelfItemsDetails";
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
          loggedIntoGoogle={handleLoggedIn}
          loggedOutOfGoogle={handleLoggedOut}
          isLoggedIn={isLoggedIn}
        />
        <Switch>
          <Route path="/" exact>
            <Home isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/shelves/:shelfId">
            <ShelfItemsDetails />
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
