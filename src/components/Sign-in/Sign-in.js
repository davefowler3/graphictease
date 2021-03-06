import React from 'react';

import FormInput from '../Form-input/Form-input';
import CustomButton from '../Custom-button/Custom-button';

import { signInWithGoogle } from '../../Firebase/Firebase.utils'

import './Sign-in.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                    <FormInput name="password" type="password" value={this.state.password} label="password" required/>

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;