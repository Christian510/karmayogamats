import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';

class ManagAcct extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }
// Should recive props with user info.  
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
                                    name={"First Name"}
                                    type={"text"}
                                    placeholder={"First Name"}
                                    value={""}
                                    onChange={"this.handleEmail"} />
                            </div>
                            <div>
                                <Input
                                    className={"input-text"}
                                    id={""}
                                    name={"Last Name"}
                                    type={"text"}
                                    placeholder={"Last Name"}
                                    value={"this.state.email"}
                                    onChange={"this.handleEmail"} />
                            </div>
                            <div>
                                <Input
                                    className={"input-text"}
                                    id={""}
                                    name={"Email"}
                                    type={"text"}
                                    placeholder={"Email"}
                                    value={""}
                                    onChange={""} />
                            </div>
                            <div>
                                <button className={"button-outlined"} >
                                    <Link to="/ResetPass" >Reset Password</Link>
                                </button>
                                <div>
                                    <Button
                                        kind={"button-solid"}
                                        name={"Save Changes"}
                                        value={"Submit"}
                                        type={"submit"} />
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