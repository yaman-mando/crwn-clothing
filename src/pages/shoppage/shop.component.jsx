﻿import React from "react";
import './shop.style.scss';
import CollectionsOverview from "../../components/collections-overview/collection-overview";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";


const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);


export default ShopPage;