import React from "react";
import './collection.style.scss'
import {connect} from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {selectCollection} from "../../redux/shop/shop.selectors";



const CollectionPage = ({collection}) => {
    const { title, items } = collection;
    return (
        <div className='collection'>
            <h2 style={{textAlign:"center",fontWeight:"bold",fontSize:36}}>{title}</h2>
            <div className='preview'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
            </div>
        </div>
    )

};

const mapStateToProps = (state,ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);