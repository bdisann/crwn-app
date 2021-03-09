import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, itemsTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div className="total">${itemsTotal}</div>

    <div className="test-warning">
      *Silahkan pakai tes credit card untuk melakukan pembayaran*
      <br />
      Visa: 4242 4242 4242 4242 - EXP 01/25 - CVV 123
      <br />
      MasterCard: 5555 5555 5555 4444 - EXP 10/25 - CVV 123
    </div>

    <StripeButton price={itemsTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemsTotal: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
