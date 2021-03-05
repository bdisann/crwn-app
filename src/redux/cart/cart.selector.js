import { createStore } from "redux";
import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],

  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulatedQuantity, cartItem) => {
      const { quantity } = cartItem;

      return accumulatedQuantity + quantity;
    }, 0)
);