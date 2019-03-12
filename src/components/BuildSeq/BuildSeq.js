
import React, { Component } from 'react';
import Axios from 'axios';

// Components
import LoginNav from '../Nav/LoginNav';
import Input from '../Input/Input';
import Button from '../Button/button';
import Pose from './Pose';
// import MyAcctNav from '../components/MyAcctNav.js'

// Styles
import './BuildSeq.sass';
import '../../Global/global.sass';


class BuildSeq extends Component {

    constructor() {
        super();
        this.state = {
            sequences: [],
        }

    }

    componentDidMount() {
        Axios.get('/yoga_api/')
            .then(res => {
                console.log("===== Success! =====");
                this.setState({
                    sequences: res.data
                })
            })
            .catch(err => {
                console.log('===== Failure =====');
                console.log(err);
            })
    }

    render() {
        const seq = this.state.sequences.map((elm, i) => {
            // console.log(elm);
            return (
                <Pose key={i} img_url={seq.img_url} english_name={seq.english_name} />
            )
        })

        return (
            <div>
                <div>
                    <LoginNav />
                </div>
                <section className="navigation" >
                    <div className="tabs flex-center-row" >
                        <div className="margin">
                            <Button kind={"button-sol-lt"} name={"Saved Sequence"} />
                        </div>
                        <div className="margin">
                            <Button kind={"button-sol-lt"} name={"Build a Sequence"} />
                        </div>
                        <div className="margin">
                            <Button kind={"button-sol-lt"} name={"Manage Account"} />
                        </div>
                    </div>
                </section>
                <section className="flex-center-row">
                <div className="sequence-bulder">
                    Displays each added pose
                        {/* <Pose /> display left to right */}
                </div>
                <div className="inputs">
                    <div>
                        <p># of poses added</p>
                    </div>

                    <Input 
                        id={"Name of Sequence"}
                        name={"Name of Sequence"}
                        inputType={"text"}
                        placeholder={"Name"}
                    />
                    <div>
                        <Button kind={"button-solid"} name={"Save Sequence"} />
                    </div>

                </div>
                </section>
                <section id="wrapper">
                    <div className="display-poses" >
                        <Pose />1
                        <Pose />2
                        <Pose />3
                        <Pose />4
                        <Pose />5
                        <Pose />6
                        <Pose />7
                        <Pose />8
                        <Pose />9
                        {/* { seq } */}
                    </div>
                </section>
            </div>
        )
    }
}

export default BuildSeq;