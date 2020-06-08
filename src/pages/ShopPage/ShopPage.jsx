// need to store data related to actual collection on ShopPage

import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../CollectionPage/CollectionPage';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

// match, location and history
// /shop/:category
// bug fix: not categoryId but collectionId
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
