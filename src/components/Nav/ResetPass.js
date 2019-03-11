import React, { Component } from 'react';
import LoginNav from '../Nav/LoginNav';
import '../../Global/global.sass'
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
                    <div>
                        <Input
                            id={"New Password"}
                            name={"New Password"}
                            inputType={"password"}
                            placeholder={"Password"}
                        />
                    </div>
                    <div>
                        <Input
                            id={"Confirm Password"}
                            name={"Password"}
                            inputType={"password"}
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