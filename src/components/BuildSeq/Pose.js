import React from 'react';
import Button from '../Button/button';
import './pose.sass';


function Pose(props) {

    return(
        // <div>
        //     <img src={ props.img_url } width="100" alt="Img" ></img>
        //     <p>{ props.english_name }</p>
        //     <Button />
        // </div>
        <div className="pose" >
        <img src={"https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1"} width="160" alt="Img" ></img>
        <p>Butterfly</p>
        <Button kind={"button-outlined"} name={"+ Sequence"} />
    </div>
    )
}

export default Pose;