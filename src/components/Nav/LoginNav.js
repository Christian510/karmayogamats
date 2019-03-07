
// Routes the user to Login.js

import React from 'react';
import Button from '../Button/button';
import './LoginNav.sass';
import Logo from '../../assets/KYM-logo.png';

function LoginNav() {

    return (
        <div>
            <div className="header">
                <div className="phone">
                    <h3>(208)222-2222</h3>
                </div>
                <div>
                    <Button kind="button-sold" name="Submit" ></Button>
                </div>
            </div>
            <div className="center">
                <div id="logo">
                    <img src={ Logo } alt="KYM" ></img>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default LoginNav;