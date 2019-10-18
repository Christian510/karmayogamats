import React from 'react';
import { Link } from 'react-router-dom';
import '../Logo/Logo.sass';
import kymLogo from '../../../assets/KYM-logo.png';



const Logo = () => {
    return (
        <Link to={'/'} >
            <img className="logo" src={kymLogo} width="200" alt="KYM" ></img>
        </Link>
    )
}

export default Logo