import React from "react";
import './collection-overview.style.scss'
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../collection-preview/collection-preview";
import {connect} from "react-redux";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";


const CollectionsOverview = ({collections}) => (
    <div className='collection-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>

);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);