import {CollectionActionTypes} from "./collection.type";


export const selectCollection = collection => ({
    type:CollectionActionTypes.SelectCollection,
    payload:collection
});
