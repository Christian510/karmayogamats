
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.sass'
import '../../Global/global.sass'
import Input from '../Input/Input';
import Button from '../Button/button';
import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => {
            return {
                    ...prevState.newUser, [name]: value
            }
        }, () => console.log(this.state)
        );
    }

    handleSubmit(event) {
        const email = this.state.email;
        const password = this.state.password;
        const users = this.props.users;
        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email && password === users[i].password) {
                this.setState({
                    isLoggedIn: true
                });
                this.props.history.push('/home/build');
            } else {
                this.invalidLogin();
            }
        }
        event.preventDefault();
    }

    invalidLogin(e) {
        e.preventDefault();
        alert("Wrong email and / or password!");
        this.setState({ 
          newUser: {
            email: '',
            password: '',
          }
        });
    }

    render() {
        return (
            <div>
                <div className="container flex-center-col">
                    <div className="wrapper align-content-bl">
                        <h1>Login to your account</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <Input
                                    title={"Email"}
                                    className={"input-text"}
                                    name={"email"}
                                    type={"text"}
                                    placeholder={"Email Address" || this.state.email}
                                    value={this.state.email}
                                    handleChange={this.handleInput}
                                />
                            </div>
                            <div>
                                <Input
                                    title={"Password"}
                                    className={"input-text"}
                                    name={"password"}
                                    type={"password"}
                                    placeholder={"Password"}
                                    value={this.state.password}
                                    handleChange={this.handleInput}
                                />
                            </div>
                            <div>
                                <Link to="/ResetPass" >Reset Password</Link>
                            </div>
                            <div id="flip">
                                <Input
                                    className={"input-bt"}
                                    name={"keep me loged in for 30 days"}
                                    type={"checkbox"}
                                />
                            </div>
                            <div>
                                <Button kind={"button-solid"}
                                    name={"Log in"}
                                    value={"Submit"}
                                    type={"submit"} />
                            </div>
                            <div id="border-top">
                                <p>Need an account?</p>
                                <div>
                                    <button className={"button-outlined"} >
                                        <Link to={'/register'}>Sign up</Link>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;