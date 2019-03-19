import React from 'react';
import '../../../Global/global.sass';
import {Link} from 'react-router-dom';


function Tabs() {
    
    return (
        <div>
            <section className="navigation" >
                <div className="tabs flex-center-row" >
                    <div className="margin">
                        <Link className={"button-sol-lt"} name={"Saved Sequence"} to={'/view-saved'}>Saved Sequence</Link>
                    </div>
                    <div className="margin">
                        <Link className={"button-sol-lt"} to={'/build'}>Build a Sequence</Link>
                    </div>
                    <div className="margin">
                        <Link className={"button-sol-lt"} to={'/'}>Manage Account</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tabs;