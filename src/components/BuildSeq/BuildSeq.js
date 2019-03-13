
import React, { Component } from 'react';
import Axios from 'axios';

// Components
import LoginNav from '../Nav/LoginNav';
import Input from '../Input/Input';
import Button from '../Button/button';
import Pose from './Pose';
import InfiniteCarousel from 'react-leaf-carousel';
// import MyAcctNav from '../components/MyAcctNav.js'

// Styles
import './BuildSeq.sass';
import '../../Global/global.sass';


class BuildSeq extends Component {

    constructor() {
        super();
        this.state = {
            poses: [],
            sequences: [],


        }


    }

    componentDidMount() {
        Axios.get('/api/yoga_api/')
            .then(res => {
                console.log("===== Success! =====");
                this.setState({
                    poses: res.data
                })
            })
            .catch(err => {
                console.log('===== Failure =====');
                console.log(err);
            })
    }

    addPose(pose) {
        console.log(`grabed the ${pose.english_name}`);
        const selectedPose = this.state.sequences.filter(item =>
            item.id === pose.id
        );
        this.state.sequences.push(selectedPose);
        console.log(this.state.sequences.length);
    }

    render() {
        const seq = this.state.poses.map((elm, i) => {
            console.log(elm);
            return (
                <Pose key={i} img_url={elm.img_url}
                    english_name={elm.english_name}
                    onClick={() => this.addPose(elm)} />
            )})

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
                        {/* <InfiniteCarousel
                            breakpoints={[
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    },
                                },
                            ]}
                            dots={true}
                            showSides={true}
                            sidesOpacity={.5}
                            sideSize={.1}
                            slidesToScroll={1}
                            slidesToShow={4}
                            scrollOnDevice={true}
                            lazyLoad={true}
                        >
                            <div className="">
                                <img
                                    className="size"
                                    alt='pose'
                                    src="https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1"
                                />
                                <p>Pose</p>
                            </div>
                            {this.state.sequences.map(({ img_url, english_name }) => {
                                return (
                                <div className="asdf img_size" >
                                    <img
                                        className="size"
                                        alt='pose'
                                        src={img_url}
                                    />
                                    <p>{english_name}</p>
                                </div>
                                );
                            })}

                        </InfiniteCarousel> */}
                        {this.state.sequences.map(({ img_url, english_name }) => 
                                // return (
                               ( <div className="asdf img_size" >
                                    <img
                                        className="size"
                                        alt={english_name}
                                        src={img_url}
                                    />
                                    <p>{english_name}</p>
                                </div>)
                                // );
                            )}
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
                        <div>
                            {seq}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default BuildSeq;