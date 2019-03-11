import React, { Component } from 'react';
import LoginNav from '../Nav/LoginNav';
import '../../Global/global.sass';
import './registration.sass';
import Footer from '../Footer/Footer';
import Input from '../Input/Input';
import Button from '../Button/button';

class Registration extends Component {

    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''

        }

    }

    // PUSH to database

    // onSumbit() routes user to checkout page.

    render() {
        return (
            <div>
                <div>
                    <LoginNav />
                </div>
                <div className="container flex-center-start">
                    <h1>Create your account</h1>
                    <div >
                        <Input
                            id={"First Name"}
                            name={"First Name"}
                            inputType={"text"}
                            placeholder={"First Name"}
                        />
                    </div>
                    <div>
                        <Input
                            id={"Last Name"}
                            name={"Last Name"}
                            inputType={"text"}
                            placeholder={"Last Name"}
                        />
                    </div>
                    <div>
                        <Input
                            id={"Email Address"}
                            name={"email"}
                            inputType={"email"}
                            placeholder={"Email"}
                        />
                    </div>
                    <div>
                        <Input
                            id={"password"}
                            name={"password"}
                            inputType={"password"}
                            placeholder={"Password"}
                        />
                    </div>
                    <div>
                        <Input
                            id={"Confirm Password"}
                            name={"password"}
                            inputType={"password"}
                            placeholder={"Confirm Password"}
                        />
                    </div>
                    <div>
                        <Button kind={"button-solid"} name={"Create Account"}  />
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Registration;