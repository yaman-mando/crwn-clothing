import { createSelector } from 'reselect';

const selectShop = state => {
    console.log(state.shop);
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
);