
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
                <section className="navigation" >
                    <div className="tabs flex-center-row" >
                        <div>Saved Sequence</div>
                        <div>Build A Sequence</div>
                        <div>Manage Account</div>
                    </div>
                    <Button kind={"button-outlined"} name={"Back To All Classes"}   />
                </section>
                    <div>
                        Displays each added pose
                        {/* <Pose /> display left to right */}
                    </div>
                    <div>
                        <p># of poses added</p>
                        <Input />
                        <Button kind={ "button-solid" } name={ "Save Sequence" } />
                    </div>
                
                <section>

                </section>
            </div>
        )
    }
}

export default BuildSeq;