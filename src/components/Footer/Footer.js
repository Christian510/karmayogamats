
import React from 'react';
import Logo from '../../assets/KYM-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Global/global.sass';
import './footer.sass';

function Footer() {

    return (
        <div className="footer">
            <div className="footer-logo">
                <img className="logo" src={Logo} width="200" alt="KYM" ></img>
            </div>
            <div className="social">
                <FontAwesomeIcon icon="facebook"/>
            </div>
        </div>
    )
}
export default Footer;