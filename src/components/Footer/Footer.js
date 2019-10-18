
import React from 'react';
// import Logo from '../../assets/KYM-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Global/global.sass';
import './footer.sass';
import Logo from '../FormComponents/Logo/Logo';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo flex-center-col">
                <Logo />
                    <div className="fex-center-col space">
                        <p className="text"> Some text goes here</p>
                        <p className="text"> Some text goes here</p>
                    </div>
                    <div className="flex-center-col space">
                        <p className="text">(208)345-1234</p>
                        <p className="text">info@karmayogamats.com</p>
                    </div>
            </div>
            <div className="social flex-center-row-f">
                <span className="dot flex-center-row">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
                </span>
                <span className="dot flex-center-row" >
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                </span>
                <span className="dot flex-center-row" >
                    <FontAwesomeIcon icon={['fab', 'pinterest-p']} size="2x" />
                </span>
                <span className="dot flex-center-row" >
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                </span>
                <span className="dot flex-center-row" >
                    <FontAwesomeIcon icon={['fab', 'spotify']} size="2x" />
                </span>
            </div>
        </div>
    )
}
export default Footer;