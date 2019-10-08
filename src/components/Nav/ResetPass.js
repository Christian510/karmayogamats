import React, { Component } from "react";
import "../../Global/global.sass";
import "./resetPass.sass";
import Input from "../Input/Input";
import Button from "../Button/button";

class ResetPass extends Component {
  // Should save new passord to db.  Axios.post to update password in db.
  // Do I need a constructor?

  render() {
    return (
      <div>
        <div className="container flex-center-start">
          <h1>Reset your password</h1>
          <p>
            Enter your email address and we'll email you a link to reset your password
          </p>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Input
                className={"input-text"}
                id={"New Password"}
                name={"New Password"}
                type={"password"}
                placeholder={"Password"}
              />
            </div>
            <div>
              <Input
                className={"input-text"}
                id={"Confirm Password"}
                name={"Password"}
                type={"password"}
                placeholder={"Password"}
              />
            </div>
            <div>
              <Button
                kind={"button-solid"}
                name={"Reset My Password"}
                value={"Submit"}
                type={"submit"}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ResetPass;
