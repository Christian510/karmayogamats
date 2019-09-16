

import React, { Component } from 'react';
import LoginNav from '../Nav/LoginNav';
import Tabs from '../Nav/Tabs/Tabs';
import Footer from '../Footer/Footer';



// Page where all saved sequences are displayed

class SaveSeq extends Component {
    render(props) {
        return (
            <section>
                <LoginNav />
                <Tabs />
                Saved Sequences
                <Footer />
            </section>
        )
    }
}

export default SaveSeq;