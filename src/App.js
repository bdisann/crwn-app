import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

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

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={HatsPage} path="/shop/hats" />
        <Route component={ShopPage} path="/shop" />
        <Route component={SignInAndSignUpPage} path="/signin" />
        <Route component={HomePage} path="/" />
      </Switch>
    </div>
  );
}

export default App;
