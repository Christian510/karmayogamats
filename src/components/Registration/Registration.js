import React, { Component } from 'react';
import '../../Global/global.sass';
import './registration.sass';
import Input from '../Input/Input';
// import Select from '../FormComponents/Select/Select';
import Button from '../Button/Button';
import Axios from 'axios';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                first_name: '',
                last_name: '',
                gender: '',
                email: '',
                password: '',
                confirm: '',
            },
            genderOptions: ['Male', 'Female', 'Others'],
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => {
            return {
                newUser: {
                    ...prevState.newUser, [name]: value
                }
            }
        }//, () => console.log(this.state.newUser)
        )
    }

    addNewUser(fn, ln, em, pw) {
        let body = {
            first_name: fn,
            last_name: ln,
            email: em,
            password: pw
        }
        Axios.post('/api/users/add_new_user', body)
            .then(res => {
                console.log("===== Successfully added new users! =====");
            })
            .catch(err => {
                console.log("=====  Oops! Something Went wrong =====");
                console.log(err);
            });
            this.props.history.push('/home/build');
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const users = this.props.users
        const { first_name, last_name, email, password, confirm } = this.state.newUser;

        // Make sure form is completely filled out.
        if (!first_name || !last_name || !email || !password || !confirm) {
            alert("All form fields are required.");
            this.handleClearForm();
        }
        // Validate password.
        else if (password !== confirm) {
            alert("Password does not match confirmation!");
            this.handleClearForm();
        }
        else if (users) {
            for (let i = 0; i < users.length; i++) {
                // Check if newUser is not in db.
                if (email !== users[i].email && password !== users[i].password) {
                    i++;
                }
                 else if (email === users[i].email) {
                   return alert("The email you entered is already assciated with an account.");
                }
                else if (password === users[i].password) {
                   return alert("The password you entered is already in use.");
                }
            }
        }
            // If not in db then add them to the db.
            return this.addNewUser(first_name, last_name, email, password);
    }

    handleClearForm() {
        this.setState({
            newUser: {
                password: '',
                confirm: '',
            }
        })
    }
    render() {
        return (
            <div>
                <div className="container flex-center-start">
                    <h1>Create your account</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <div >
                            <Input
                                title={"First Name"}
                                className={'input-text'}
                                name={"first_name"}
                                type={"text"}
                                value={this.state.newUser.first_name}
                                handleChange={this.handleInput}
                                placeholder={"First Name"} />
                        </div>
                        <div>
                            <Input
                                title={"Last Name"}
                                className={'input-text'}
                                name={"last_name"}
                                type={"text"}
                                value={this.state.newUser.last_name}
                                handleChange={this.handleInput}
                                placeholder={"Last Name"} />
                        </div>
                        <div>
                            <Input
                                title={"Email"}
                                className={'input-text'}
                                name={"email"}
                                type={"email"}
                                value={this.state.newUser.email}
                                handleChange={this.handleInput}
                                placeholder={"Email"} />
                        </div>
                        <div>
                            <Input
                                title={"Password"}
                                className={'input-text'}
                                name={"password"}
                                type={"password"}
                                value={this.state.newUser.password}
                                handleChange={this.handleInput}
                                placeholder={"Password"} />
                        </div>
                        <div>
                            <Input
                                title={"Confirm Password"}
                                className={'input-text'}
                                name={"confirm"}
                                type={"password"}
                                value={this.state.newUser.confirm}
                                handleChange={this.handleInput}
                                placeholder={"Password"} />
                        </div>
                        <div id={"pad-bt"}>
                            <Button
                                kind={"button-solid"}
                                name={"Create Accout"} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration;