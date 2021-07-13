import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Nav from "./components/Nav";
import Footer from './components/Footer';

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
        <Footer />
      </Router>
    </>
  );
}

export default App;
