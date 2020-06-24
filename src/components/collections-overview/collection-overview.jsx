import React from "react";
import './collection-overview.style.scss'
import {createStructuredSelector} from "reselect";
import {selectShopSections} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview";
import {connect} from "react-redux";


const CollectionsOverview = ({shopData}) => (
    <div className='collection-overview'>
        {
            shopData.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>

);

const mapStateToProps = createStructuredSelector({
    shopData: selectShopSections
});

export default connect(mapStateToProps)(CollectionsOverview);