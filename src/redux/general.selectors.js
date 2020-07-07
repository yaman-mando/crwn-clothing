import {createSelector} from "reselect";


const selectGeneral = state => state.general;

export const select_g_collection =
    createSelector(
        [selectGeneral],
        general=>general.g_collection
    );


export const selectIsFetching = createSelector(
    [selectGeneral],
    general => general.g_isFetching
);