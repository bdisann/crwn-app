import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import { auth } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

const HatsPage = (props) => (
  <div>
    {console.log(props)}
    <h1>Hats Page</h1>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route component={HatsPage} path="/shop/hats" />
          <Route component={ShopPage} path="/shop" />
          <Route component={SignInAndSignUpPage} path="/signin" />
          <Route component={HomePage} path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
