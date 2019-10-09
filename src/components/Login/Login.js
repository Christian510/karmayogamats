
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.sass'
import '../../Global/global.sass'
import Input from '../Input/Input';
import Button from '../Button/button';

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
                ...prevState, [name]: value
            }
        }, () => console.log(this.state)
        );
    }

    handleSubmit(event) {
        const email = this.state.email;
        const password = this.state.password;
        const users = this.props.users;
        const validateUser = users.reduce((validUser, user) => {
            if (user.email === email && user.password === password) {
                validUser = validUser || true;
            }
            return validUser;
        }, false);
        if (validateUser === true) {
            this.setState({
                isLoggedIn: true
            });
            this.props.history.push('/home/build');
        }
        else if (validateUser === false) {
            alert("Wrong email and / or password!");
        }
        event.preventDefault();
    }

    invalidLogin(e) {
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
                                    placeholder={"Email Address"}
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