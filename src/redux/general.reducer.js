import {generalActionTypes} from './general.types';

﻿
const INITIAL_STATE = {
    g_collection:null,
    g_isFetching:true,
    g_errorMessage:undefined
};


const generalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case generalActionTypes.FETCH_START:
            return {
                ...state,
                g_isFetching: true
            };
        case generalActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                g_isFetching: false,
                g_collection: action.payload
            };
        case generalActionTypes.FETCH_FAILURE:
            return {
                ...state,
                g_isFetching: false,
                g_errorMessage: action.payload
            };

        default:
            return state;
    }
};

export default generalReducer;