import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

// .find iterating through the whole array,
// time consuming
// can store it in object instead; data normalization
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollectionsForPreview],
    (collections) => collections[collectionUrlParam]
  );
