import {shopActionTypes} from "./shop.types";
import {firestore} from "../../firebase/firebase.utils";
import {convertCollectionsSnapshotToMap} from "../../firebase/firebase.reducer";

export const fetchingCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});


export const fetchCollectionFailure = errorMessage => ({
    type:shopActionTypes.FETCH_COLLECTION_FAILURE,
    payload:errorMessage
});

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchingCollectionsStart());
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
            this.setState({loading: false});
        }).catch( e => dispatch(fetchCollectionFailure(e.message)));
    }
};