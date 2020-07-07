import {firestore} from "../firebase/firebase.utils";
import {generalActionTypes} from "./general.types";
import {convertGeneralSnapshotToMap} from "./help.reducer";



export const fetchingStart = () => ({
    type: generalActionTypes.FETCH_START,
});

export const fetchSuccess = collectionMap => ({
    type: generalActionTypes.FETCH_SUCCESS,
    payload: collectionMap
});


export const fetchFailure = errorMessage => ({
    type:generalActionTypes.FETCH_FAILURE,
    payload:errorMessage
});

export const fetchStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('sections');
        dispatch(fetchingStart());
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertGeneralSnapshotToMap(snapshot);
            dispatch(fetchSuccess(collectionsMap));
        }).catch( e => dispatch(fetchFailure(e.message)));
    }
};

export const fetchStartAsyncApi = (dataSource) => {
    return dispatch => {
        dispatch(fetchingStart());
        fetch(dataSource)
            .then(response => response.json())
            .then(data => dispatch(fetchSuccess(data)))
            .catch( e => dispatch(fetchFailure(e.message)));
    }
};
