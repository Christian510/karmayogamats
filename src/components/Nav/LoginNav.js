
// Routes the user to Login.js

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/KYM-logo.png';
import './LoginNav.sass';
import '../Button/button.sass';




class LoginNav extends Component {
    constructor(){
        super();
        this.state = {
            toLogin: false
        }
        this.basState = this.state
    }
    

    handleLogin() {
         this.setState({
            toLogin: true
        })
    }

    render() {
        if(this.state.toLogin === true) {
            
            return <Redirect to='/login' />
        }
        
        return (
            <div>
                <div className="header">
                    <div className="phone">
                        <h3>(208)222-2222</h3>
                    </div>
                    <div>
                        <p> <Link to="/login" >Login</Link> </p>
                    </div>
                </div>
                <div className="center">
                    <img className="logo" src={Logo} width="200" alt="KYM" ></img>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default LoginNav;