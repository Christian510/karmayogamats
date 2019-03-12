
import React, { Component } from 'react';
import Axios from 'axios';

// Components
import LoginNav from '../Nav/LoginNav';
import Input from '../Input/Input';
import Button from '../Button/button';
import Pose from './Pose';
// import InfiniteCarousel from '../../Carousel/react-leaf-carousel';
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
        Axios.get('/api/yoga_api/')
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
                <Pose key={i} img_url={elm.img_url} english_name={elm.english_name} />
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
                            slidesToScroll={4}
                            slidesToShow={4}
                            scrollOnDevice={true}
                        >
                            <div>
                                <img
                                    className="size"
                                    alt='pose'
                                    src="https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1"
                                   
                                />
                                <p>Boat Pose</p>
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=904098&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ef4d9c&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=00f3d1&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=00ffff&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ee1f34&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=91b4c0&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ff6347&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ebbfbf&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=def1f9&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=cdf2c6&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=9fa616&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=2c4caa&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=44e3e1&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ff6666&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=94e1e3&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=29083c&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ffff99&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=616161&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                            <div>
                                <img
                                    alt=''
                                    src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ed7ebe&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
                                />
                            </div>
                        </InfiniteCarousel> */}
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
                        {/* <Pose />2
                        <Pose />3
                        <Pose />4
                        <Pose />5
                        <Pose />6
                        <Pose />7
                        <Pose />8
                        <Pose />9 */}
                        <div>
                            { seq }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default BuildSeq;