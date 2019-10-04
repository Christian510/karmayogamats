import React from 'react';
import './button.sass';


function Button(props) {

    const { kind, name, onClick, ...other } = props
    return (
        <button
            className={kind}
            onClick={onClick} {...other} > {name} </button>
    )
}

export default Button;