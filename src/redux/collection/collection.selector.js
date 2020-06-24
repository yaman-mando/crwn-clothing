import {createSelector} from "reselect";

const collections = state => state.collection;


export const selectCollection = createSelector(
    [collections],
    collection=>collection
);

