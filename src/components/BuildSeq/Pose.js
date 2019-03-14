import React from 'react';
import Button from '../Button/button';
import './pose.sass';


function Pose(props) {

    return (
        <div className="pose" >
            <img src={props.img_url} width="160" alt="Img" ></img>
            <div>
                <p>{props.english_name}</p>
                <Button kind={"button-outlined"} name={"+ Sequence"} onClick={props.onClick} />
            </div>
        </div>
    )
}

export default Pose;