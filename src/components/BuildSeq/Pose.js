import React from 'react';
import Button from '../Button/button';
import './pose.sass';


function Pose(props) {
// console.log("Pose.js: line 7: props.key", props);
    return (
        <div className="pose" >
            <img src={props.img_url} width="160" alt="Img" ></img>
            <div>
                <p>{props.english_name}</p>
                <Button key={ props.id } kind={"button-outlined"} name={"+ Sequence"} onClick={props.onClick} />
            </div>
        </div>
    )
}

export default Pose;