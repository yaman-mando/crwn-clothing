import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route,Redirect} from "react-router-dom";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPages from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";
import PostsPage from "./pages/posts/posts.component";





class App extends React.Component {

    unsubscribeFromAuth = null;


    componentDidMount() {
        const {setCurrentUser} = this.props;
        //const sectionsArray = this.props.sections;


        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });

                })
            }
                setCurrentUser(userAuth);
                //addCollectionAndDocuments('sections', sectionsArray);

        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route path='/users' component={PostsPage} />
                    <Route exact
                           path='/signin'
                           render={() =>
                               this.props.currentUser ? (
                                   <Redirect to='/' />
                               ) : (
                                   <SignInAndSignUpPages />
                               )
                           }
                    />
                </Switch>
            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    //sections:selectDirectorySections
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
