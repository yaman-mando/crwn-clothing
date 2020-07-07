import React from "react";
import './posts.style.scss';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {createStructuredSelector} from "reselect";
import {selectIsFetching} from "../../redux/general.selectors";
import {connect} from "react-redux";




class PostsPage extends React.Component{
    constructor() {
        super();
        const dataSource='https://jsonplaceholder.typicode.com/users';
    }

    componentDidMount() {
        const {fetchStartAsyncApi} = this.props;
        fetchStartAsyncApi();
    }

    render() {
        const{match} = this.props;

        return()
    }
}

const mapStateToProps=createStructuredSelector({
    isFetching:selectIsFetching
});

const mapDispatchToProps = dispatch => ({
    fetchStartAsyncApi: () => dispatch(fetchStartAsyncApi())
});

export default connect(mapStateToProps,mapDispatchToProps)(PostsPage);