import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/button';

class ManagAcct extends Component {

    constructor() {
        super();
        this.state = {

        }

    }

    render() {
        return (
            <section>
                <div className="container flex-center-col">
                    <div className="wrapper align-content-bl">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <Input
                                    className={"input-text"}
                                    id={"Email Address"}
                                    name={"email"}
                                    type={"text"}
                                    placeholder={"this.props.first_name"} 
                                    value={"this.props.email"}
                                    onChange={"this.handleEmail"}
                                    />
                            </div>
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
                                <Button kind={"button-solid"}
                                    name={"Log in"}
                                    value={"Submit"}
                                    type={"submit"} />
                            </div>
                            <div id="border-top">
                                <div>
                                    <button className={"button-outlined"} >
                                        <Link to={'/register'}>Sign up</Link>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default ManagAcct;