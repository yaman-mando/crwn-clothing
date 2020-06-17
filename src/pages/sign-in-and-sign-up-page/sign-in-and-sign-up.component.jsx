import React from "react";
import './sign-in-and-sign-up.style.scss'
import SignIn from "../../components/sing-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPages = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPages;


