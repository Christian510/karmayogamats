
// Routes the user to Login.js

import React from 'react';
import Button from '../Button/button';
import './LoginNav.sass';
import '../Button/button.sass'
import Logo from '../../assets/KYM-logo.png';

function LoginNav() {

    return (
        <div className="container">
            <div className="header">
                <div className="phone">
                    <h3>(208)222-2222</h3>
                </div>
                <div className="button">
                    <Button kind={"button-solid"} name={"Submit"} onClick={() => console.log("clicked!")}></Button>
                </div>
            </div>
            <div className="center">
                    <img className="logo" src={ Logo } width="200" alt="KYM" ></img>
            </div>

            <div>

            </div>
        </div>
    )
}

export default LoginNav;