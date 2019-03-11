
import React, { Component } from 'react';

// Components
import LoginNav from '../Nav/LoginNav';
import Input from '../Input/Input';
import Button from '../Button/button';
// import MyAcctNav from '../components/MyAcctNav.js'

// Styles
import './BuildSeq.sass';
import '../../Global/global.sass'



class BuildSeq extends Component {

    constructor() {
        super();
        this.state = {
            sequences: [],
            
        }

    }

    render() {
        return (
            <div>
                <div>
                    <LoginNav />
                </div>
                <section>
                    <div className="navigation" >
                        <div>Saved Sequence</div>
                        <div>Build A Sequence</div>
                        <div>Manage Account</div>
                    </div>
                    <div>
                        Displays each added pose
                    </div>
                    <div>
                        <p># of poses added</p>
                        <Input />
                        <Button kind={ "button-solid" } name={ "Save Sequence" } />
                    </div>
                </section>
                <section>

                </section>
            </div>
        )
    }
}

export default BuildSeq;