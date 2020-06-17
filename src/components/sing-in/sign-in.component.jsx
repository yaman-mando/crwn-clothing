import React from "react";
import './sign-in.style.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";
import {auth} from  "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isValidForm:''
        }
    }


    handleSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});

        }catch (e) {
            console.log(e);
        }

    };

    handleChange = async event =>{
        const {value , name} = event.target;
        await this.setState({[name]: value});
        this.isFormValid();

    };

    isFormValid = () => {
        const {email, password} = this.state;
        this.setState({'isValidForm':(email&&password)});
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='email' type='email' onChange={this.handleChange} value={this.state.email} required/>
                    <FormInput name='password' label='password' type='password' onChange={this.handleChange} value={this.state.password} required/>
                    <div className='buttons'>
                    <CustomButton disabled={!this.state.isValidForm}  type='submit'>Sign in</CustomButton>
                    <CustomButton  onClick={signInWithGoogle} isGoogleButton>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )

    }
}

export default SignIn;