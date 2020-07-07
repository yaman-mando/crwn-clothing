export const convertGeneralSnapshotToMap = sections => {
    const convertSection=[];
    const transformedCollection = sections.docs.map((doc,idx) => {
        const {imageUrl, title, linkUrl, id} = doc.data();
        convertSection[idx]={imageUrl:imageUrl,title:title,linkUrl:linkUrl,id:id};
    });
    return convertSection;
};