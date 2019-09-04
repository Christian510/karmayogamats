
import React, { Component } from 'react';
import Axios from 'axios';

// Components
import LoginNav from '../Nav/LoginNav';
import Tabs from '../Nav/Tabs/Tabs';
import Input from '../Input/Input';
import Button from '../Button/button';
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
            activeItemIndex: 0

        }

        this.handleClick = this.handleClick.bind(this);
        this.deletePose = this.deletePose.bind(this);
        this.addPose = this.addPose.bind(this);
    }

    handleClick(e) {
        e.preventDefualt();
        this.props.history.push('/');
    }

    componentDidMount() {
        // Gets all the poses from API  
        console.log("did mount")
        Axios.get('http://localhost:4000/api/yoga_api/')
            .then(res => {
                console.log("===== Success! =====");
                this.setState({
                    poses: res.data
                })
            })
            .catch(err => {
                console.log('=====  Failure =====');
                console.log(err);
            })
    }
    // The "n" refers to newSequence
    createChildren = n => n.map( (pose) => {
        pose= pose[0];
        // console.log(pose.id);
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
            <p>{ pose.english_name }</p>
            <Button kind={"button-solid"} name={"Delete"} onClick={() => this.deletePose(pose)}/>
            </div>
        )
    });

    changeActiveItem = (activeItemIndex) => { 
        this.setState({ 
            activeItemIndex: activeItemIndex,
        }); 
    }


    addPose(pose) {
        // console.log(pose);
        let { sequences, poses } = this.state;
        // console.log("addpose clicked: ", sequences);
        let newSequences = sequences;
        const selectedPose = poses.filter(item =>
            item.id === pose.id
        );

        newSequences.push(selectedPose);
        
        this.setState({
            sequences: newSequences,
            children: this.createChildren(newSequences),

        }, () => { console.log("line 97: children", this.state.children) }
        );
    }

    deletePose(pose) {
        let { sequences } = this.state;
        let updateSeq = sequences;
        console.log("searchSeq: ", updateSeq);
        // let updateSeq = searchSeq.filter( elm => elm.id === pose.id );
        // console.log("updateSeq: ", updateSeq);
        for( let i = 0; i < updateSeq.length; i++){
            let findId = updateSeq[i][0].id
            if ( findId === pose.id ) {
                updateSeq.splice(i, 1);
            }
        }
        console.log("Is pose.id removed? ", updateSeq);
        this.setState({
            // sequences: updated_sequence?,
            children:  this.createChildren(updateSeq),
        });
       
    }
    
    render() {        
        const {
            activeItemIndex,
            children,
        } = this.state;
        // Displays all the poses in the DOM
        const seq = this.state.poses.map(( elm ) => {
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
                <div>
                    <LoginNav />
                </div>
                <Tabs />
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
                            outsideChevron={false}
                        >
                            {children}
                        </ItemsCarousel>
                    </div>
                    <div className="inputs">
                        <div>
                            <p>{children.length} poses added</p>
                        </div>

                        <Input
                            id={"Name of Sequence"}
                            name={"Name of Sequence"}
                            inputType={"text"}
                            placeholder={"Name"}
                            style={{width: 100}}
                        />
                        <div>
                            <Button kind={"button-solid"} name={"Save Sequence"} onClick={this.handleClick} />
                        </div>

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