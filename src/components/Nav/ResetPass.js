import React, { Component } from 'react';
import LoginNav from '../Nav/LoginNav';
import '../../Global/global.sass';
import './resetPass.sass';
import Footer from '../Footer/Footer';
import Input from '../Input/Input';
import Button from '../Button/button';

class ResetPass extends Component {

    render() {
        return (
            <div>
                <div>
                    <LoginNav />
                </div>
                <div className="container flex-center-start">
                    <h1>Reset your password</h1>
                    <p>Enter your email address and we'll email you a link to reset your password</p>
                    <div>
                        <Input
                            className={"input-text"}
                            id={"New Password"}
                            name={"New Password"}
                            type={"password"}
                            placeholder={"Password"}
                        />
                    </div>
                    <div>
                        <Input
                            className={"input-text"}
                            id={"Confirm Password"}
                            name={"Password"}
                            type={"password"}
                            placeholder={"Password"}
                        />
                    </div>
                    <div>
                        <Button kind={"button-solid"} name={"Reset My Password"} />
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

export default ResetPass;