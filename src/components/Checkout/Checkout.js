import React, { Component } from 'react';


class Checkout extends Component {

    constructor() {
        super();
        this.state = {
            
            address: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            pay_method: '',
            secret_num: '',

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

export default Checkout;