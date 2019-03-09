

// axios.get username and login

import React, { Component } from 'react';
import LoginNav from '../Nav/LoginNav';
import './Login.sass'
import '../../Global/global.sass'
import Footer from '../Footer/Footer';
import Input from '../Input/Input';
import Button from '../Button/button';

class Login extends Component {

    render() {
        return (
            <div>
                <div>
                    <LoginNav />
                </div>
                <div className="container flex-center-start">
                    <h1>Login to your account</h1>
                    <div>
                        <Input
                            id={"Email Address"}
                            name={"Email"}
                            inputType={"text"}
                            placeholder={"Email Address"}
                        />
                    </div>
                    <div>
                        <Input
                            id={"Email Address"}
                            name={"Password"}
                            inputType={"text"}
                            placeholder={"Password"}
                        />
                    </div>
                    <p>Forgot Password?</p>
                    <div>
                        <Input
                            id={"Email Address"}
                            name={"keep me loged in for 30 days"}
                            inputType={"checkbox"}
                        />
                    </div>
                    <div>
                        <Button kind={"button-solid"} name={"Log in"} />
                    </div>
                    <div>
                        <p>Need an account?</p>  {/* use ::before to create line */}
                        <div>
                            <Button kind={"button-outlined"} name={"Sign Up"} />
                        </div>
                    </div>
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Login;