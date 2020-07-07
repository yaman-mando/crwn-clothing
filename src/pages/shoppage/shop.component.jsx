import React from "react";
import './shop.style.scss';
import CollectionsOverview from "../../components/collections-overview/collection-overview";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {createStructuredSelector} from "reselect";
import {
    selectCollections,
    selectIsCollectionFetching,
} from "../../redux/shop/shop.selectors";
import {fetchCollectionStartAsync} from "../../redux/shop/shop.actions";


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
        console.log('mount');
     }

    render() {
        const {match,isCollectionFetching,isCollectionLoaded} = this.props;
        console.log(isCollectionFetching);
        console.log('render');
        return (
            <div className='shop-page'>
                <Route exact
                       path={`${match.path}`}
                       render={props =>{
                         return  (
                           <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                       )}
                       }
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={props => (
                        <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
                    )} />
            </div>
        )
    }
}

const mapStateToProps= createStructuredSelector({
    isCollectionFetching:selectIsCollectionFetching,
    isCollectionLoaded:selectCollections
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopPage);