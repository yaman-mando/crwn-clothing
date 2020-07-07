import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections =
    createSelector(
        [selectShop],
        shop => shop.collections
    );

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections =>
        collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    );

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => shop.collections
);


/*
const selectShop = state => {
    return(state.shop)
};



export const selectShopSections = createSelector(
    [selectShop],
    shop => shop.shopData
);


export const selectorCollectionByUrl= routeName =>
    createSelector(
    [selectShopSections],
    collections => {
        const collection= collections.find(collection => collection.title.toLowerCase() === routeName);
        if(collection){
            return collection;
        }
        else
        {
            window.history.back();
        }
    }
);*/
