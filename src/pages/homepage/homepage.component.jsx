import React from "react";
import "./homepage.style.scss";
import Directory from "../../components/directory/directory.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {Route} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {selectIsFetching} from "../../redux/general.selectors";
import {fetchStartAsync} from "../../redux/general.actions";


const HomePageWithSpinner = WithSpinner(Directory);


class HomePage extends React.Component{

    componentDidMount() {
        const {fetchStartAsync} = this.props;
        fetchStartAsync();
        console.log('mount');
    }


    render() {
        const {match,isFetching} = this.props;
        console.log(isFetching);
        console.log('render');
        return(
        <div className='homepage'>
            <Route path={`${match.path}`}
            render={props=>{
                return(
                    <HomePageWithSpinner isLoading={isFetching} {...props} />
                )
            }}
            />
        </div>
    )
    }
}

const mapStateToProps=createStructuredSelector({
   isFetching:selectIsFetching
});

const mapDispatchToProps = dispatch => ({
    fetchStartAsync: () => dispatch(fetchStartAsync())
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage) ;