import React from 'react';
import { Link } from 'react-router-dom';
import '../Logo/Logo.sass';
import kymLogo from '../../../assets/KYM-logo.png';



const Logo = (props) => {
    return (
        <Link to={'/'} >
            <img className="" src={kymLogo} width={props.width} alt="KYM" ></img>
        </Link>
    )
}

export default Logo