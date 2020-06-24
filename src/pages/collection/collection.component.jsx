import React from "react";
import './collection.style.scss'
import {createStructuredSelector} from "reselect";
import {selectCollection} from "../../redux/collection/collection.selector";
import {connect} from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {selectorCollectionByUrl} from "../../redux/shop/shop.selectors";


const CollectionPage = ({collection}) => {
    return (
        <div className='collection'>
            <h2 style={{textAlign:"center",fontWeight:"bold",fontSize:36}}>{collection.title}</h2>
            <div className='preview'>
            {
                collection.items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
            </div>
        </div>
    )

};

const mapStateToProps = (state,ownProps) => ({
    collection: selectorCollectionByUrl(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);