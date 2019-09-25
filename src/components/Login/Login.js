
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginNav from '../Nav/LoginNav';
import './Login.sass'
import '../../Global/global.sass'
import Footer from '../Footer/Footer';
import Input from '../Input/Input';
import Button from '../Button/button';
import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            email: '',
            password: '',
            isLoggedIn: false
        }
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    handlePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    handleSubmit(event) {
        // alert('email: '+ this.state.email + ' password: ' + this.state.password);
        const email = this.state.email;
        const password = this.state.password;
        const users = this.state.users;
        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email && password === users[i].password) {
                this.setState({
                    isLoggedIn: true
                });
                this.props.history.push('/manage');
            }
        }
        event.preventDefault();
    }
    // componentWillMount(){}

    componentDidMount() {
        // Gets all the poses from API  
        console.log("did mount")
        Axios.get('/api/users/find_user')
            .then(res => {
                console.log("===== Success! =====");
                // let users = res.data;
                // let user = users.map( elm => {
                //     let user = {
                //         email: elm.email,
                //         password: elm.password
                //     }
                //     return user;
                // } );
                this.setState({
                    users: res.data
                });

            })
            .catch(err => {
                console.log('=====  Failure =====');
                console.log(err);
            });

    }

    render() {
        console.log("email: ", this.state.email, "password: ", this.state.password);
        return (
            <div>
                <div>
                    <LoginNav />
                </div>
                <div className="container flex-center-col">
                    <div className="wrapper align-content-bl">
                        <h1>Login to your account</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <Input
                                    className={"input-text"}
                                    id={"Email Address"}
                                    name={"email"}
                                    type={"text"}
                                    placeholder={"Email Address"}
                                    value={this.state.email}
                                    onChange={this.handleEmail}
                                />
                            </div>
                            <div>
                                <Input
                                    className={"input-text"}
                                    id={"Password"}
                                    name={"password"}
                                    type={"text"}
                                    placeholder={"Password"}
                                    value={this.state.password}
                                    onChange={this.handlePassword}
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
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Login;