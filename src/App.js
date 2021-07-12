import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ShopPage from "./components/Pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
