import {CollectionActionTypes} from "./collection.type";


const INITIAL_STATE = {
    collections:[]
};


const collectionReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case CollectionActionTypes.SelectCollection:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    }
};

export default collectionReducer;