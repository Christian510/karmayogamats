import React, { Component } from 'react';

// Components
// import Button from '../Button/Button';
// import Input from '../Input/Input.sass';

// Styles
import '../../Global/global.sass';
import './checkout.sass';


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