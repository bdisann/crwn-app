import { createSelector } from "reselect";

import memoize from "lodash.memoize";

const COLLECTION_ID_STATE = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((paramsUrls) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[paramsUrls]
  )
);
