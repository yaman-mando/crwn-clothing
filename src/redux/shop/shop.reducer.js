﻿//import SHOP_DATA from "./shop.data";
import {shopActionTypes} from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    isFetching:false,
    errorMessage:undefined
};


const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            };
        case shopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };
        case shopActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };

        default:
            return state;
    }
};


export default shopReducer;