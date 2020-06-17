import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUpPages from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser:null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot =>{
                 this.setState({
                     currentUser:{
                         id:snapShot.id,
                         ...snapShot.data()
                     }
                 });

                })
            }
            else {
                this.setState({currentUser: userAuth});
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUpPages}/>
                </Switch>
            </div>
        );
    }

}

export default App;
