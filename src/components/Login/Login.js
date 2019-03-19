

// axios.get username and login

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginNav from '../Nav/LoginNav';
import './Login.sass'
import '../../Global/global.sass'
import Footer from '../Footer/Footer';
import Input from '../Input/Input';
import Button from '../Button/button';

class Login extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentWillMount(){}

    componentDidMount(){}

    render() {
        return (
            <div>
                <div>
                    <LoginNav />
                </div>
                <div className="container flex-center-col">
                    <div className="wrapper align-content-bl">
                        <h1>Login to your account</h1>
                        <div>
                            <Input
                                className={"input-text"}
                                id={"Email Address"}
                                name={"Email"}
                                type={"text"}
                                placeholder={"Email Address"}
                            />
                        </div>
                        <div>
                            <Input
                                className={"input-text"}
                                id={"Password"}
                                name={"Password"}
                                type={"text"}
                                placeholder={"Password"}
                            />
                        </div>
                        <div>
                            <Link to="/ResetPass" >Reset Password</Link>
                        </div>
                        <div id="flip">
                            <Input
                                className={"input-bt"}
                                id={"checkbox"}
                                name={"keep me loged in for 30 days"}
                                type={"checkbox"}
                            />
                        </div>
                        <div>
                            <Button kind={"button-solid"} name={"Log in"} />
                        </div>
                        <div id="border-top">
                            <p>Need an account?</p>
                            <div>
                                <button className={"button-outlined"} >
                                    <Link to={'/register'}>Sign up</Link>
                                </button>
                            </div>
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