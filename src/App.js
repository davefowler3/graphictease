import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import "./App.scss";

import Nav from "./components/Nav";
import Footer from './components/Footer';

import Home from "./components/Home";
import ShopPage from "./components/Pages/Shop";
import AboutPage from "./components/Pages/About";

import { setCurrentUser } from './redux/user/user.actions'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
