import React, { Component } from 'react';
// import MyAcctNav from '../components/MyAcctNav.js'

class Registration extends Component {

    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''

        }

    }

    // PUSH to database

    // onSumbit() routes user to checkout page.

    render() {
        return (
            <div>
                Account Registration
            </div>
        )
    }
}

export default Registration;