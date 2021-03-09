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

export const selectCartToggle = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulatedQuantity, cartItem) => {
    const { quantity, price } = cartItem;

    return accumulatedQuantity + quantity * price;
  }, 0)
);
