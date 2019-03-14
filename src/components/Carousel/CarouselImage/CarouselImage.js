

import React from 'react';
// import '../../Global/glabal.sass';


function CarouselImage(props) {

    return (
        props.sequences.map(({ img_url, english_name }) => {
            return (
            <div className= "img_size" >
                <img
                    className="size"
                    alt={img_url}
                    src={img_url}
                />
                <p>{english_name}</p>
            </div>
            );
        })
    )
}

export default CarouselImage;