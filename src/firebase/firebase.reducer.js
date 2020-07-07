import {firestore} from "./firebase.utils";


//add collection and documents to our database in firebase
//collectionKey:is collectionName
//objectToAdd:is my dataArray which I will to add
export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {

    console.log(collectionKey);
    console.log(objectsToAdd);
    const collectionRef= firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
    });

    return await batch.commit();
};


export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title,items} = doc.data();

        return{
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        };
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});

};

