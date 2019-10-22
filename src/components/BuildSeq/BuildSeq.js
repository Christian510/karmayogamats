
import React, { Component } from 'react';
import Axios from 'axios';

// Components
import Input from '../Input/Input';
import Button from '../Button/Button';
import Pose from './Pose';
import ItemsCarousel from 'react-items-carousel';
// import CarouselImage from '../Carousel/CarouselImage/CarouselImage';
// import MyAcctNav from '../components/MyAcctNav.js'

// Styles
import './BuildSeq.sass';
import '../../Global/global.sass';

class BuildSeq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poses: [],
            sequences: [],
            children: [],
            activeItemIndex: 0,
            seqenceName: '',
            savedSeq: [],
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deletePose = this.deletePose.bind(this);
        this.addPose = this.addPose.bind(this);
    }

    handleClick(e) {
        e.preventDefualt();
        this.props.history.push('/');
    }

    handleChange(e) {
        let { children } = this.state;
        this.setState({
            seqenceName: e.target.value,
            savedSeq: children,
        });
    }
    handleSubmit(e) {
        alert(
            `Sequence to be saved to db: Sequence ${this.state.savedSeq} 
            Sequence Name ${ this.state.seqenceName}`
        );

        e.preventDefualt();
    }

    componentDidMount() {
        // Gets all the poses from API  
        console.log("did mount")
        Axios.get('/api/yoga_api/')
            .then(res => {
                console.log("===== Success! =====");
                this.setState({
                    poses: res.data
                })
            })
            .catch(err => {
                console.log('=====  Failure =====');
                console.log(err);
            });
        // Axios.post('/api/saved_sequences/')
        //     .then(res => {
        //         console.log('===== Success =====');
                
        //     })
    }
    
    createChildren = n => n.map((pose) => {
        pose = pose[0];
        return (
            <div>
                <div
                    key={pose.id}
                    style={{
                        height: 200,
                        border: "solid",
                        backgroundImage: `url("${pose.img_url}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}>
                </div>
                <p>{pose.english_name}</p>
                <Button kind={"button-solid"} name={"Delete"} onClick={() => this.deletePose(pose)} />
            </div>
        )
    });

    changeActiveItem = (activeItemIndex) => {
        this.setState({
            activeItemIndex: activeItemIndex,
        });
    }

    addPose(pose) {
        let { sequences, poses, children } = this.state;
        let newSequences = sequences;
        const selectedPose = poses.filter(item =>
            item.id === pose.id
        );
        newSequences.push(selectedPose);

        this.setState({
            sequences: newSequences,
            children: this.createChildren(newSequences),
            savedSeq: children,
        });
    }

    deletePose(pose) {
        let { children, sequences } = this.state;
        let updateSeq = sequences;
        for (let i = 0; i < updateSeq.length; i++) {
            if (updateSeq[i][0].id === pose.id) {
                updateSeq.splice(i, 1);
            }
        }
        this.setState({
            children: this.createChildren(updateSeq),
            savedSeq: children,
        });
    }

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;
        // Displays all the poses in the DOM
        const seq = this.state.poses.map((elm) => {
            return (
                <Pose
                    key={elm.id}
                    img_url={elm.img_url}
                    english_name={elm.english_name}
                    onClick={() => this.addPose(elm)} />
            )
        });
        return (
            <div>
                {/* ********* CAROUSEL ******** */}
                <section className="flex-center-row">
                    <div className="sequence-bulder">
                        <ItemsCarousel
                            // Placeholder configurations
                            enablePlaceholder={false}
                            numberOfPlaceholderItems={5}
                            minimumPlaceholderTime={1000}
                            // placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

                            // Carousel configurations
                            numberOfCards={5}
                            gutter={12}
                            showSlither={true}
                            firstAndLastGutter={true}
                            freeScrolling={true}

                            // Active item configurations
                            requestToChangeActive={this.changeActiveItem}
                            activeItemIndex={activeItemIndex}
                            activePosition={'center'}

                            chevronWidth={24}
                            rightChevron={'>'}
                            leftChevron={'<'}
                            outsideChevron={false} >
                            {children}
                        </ItemsCarousel>
                    </div>
                {/* ********* END CAROUSEL ******** */}
                    <div className="inputs">
                        <div>
                            <p>{children.length} poses added</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <Input
                                id={"Name of Sequence"}
                                name={"Name of Sequence"}
                                type={"text"}
                                placeholder={"Name"}
                                style={{ width: 100 }}
                                onChange={this.handleChange} />
                            <div>
                                <Button
                                    kind={"button-solid"}
                                    name={"Save Sequence"}
                                    value={"Submit"}
                                    type={"submit"} />
                            </div>
                        </form>
                    </div>
                </section>
                <section id="wrapper">
                    <div className="display-poses" >
                        {seq}
                    </div>
                </section>
            </div>
        )

    }
}

export default BuildSeq;