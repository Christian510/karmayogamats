
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import BuildSeq from '../BuildSeq/BuildSeq';
import SavedSeq from '../SaveSeq/SaveSeq';
import MangAcct from '../MangAcct/MangAcct';
import '../Home/Home.sass'
import '../Button/button.sass';


function Home() {

    // State for all three components go here.
        return (
            <div>
                <section className="navigation" >
                    <div className="tabs flex-center-row" >
                        <div className="margin">
                            <Link className={"button-sol-lt"} 
                                    id={"saved"} name={"Saved Sequence"} 
                                    to={'/home/saved'}>Saved Sequence</Link>
                        </div>
                        <div className="margin">
                            <Link className={"button-sol-lt"} 
                                    id={"build"} 
                                    to={'/home/build'}>Build a Sequence</Link>
                        </div>
                        <div className="margin">
                            <Link className={"button-sol-lt"} 
                                    id="manage" 
                                    to={'/home/manage'}>Manage Account</Link>
                        </div>
                    </div>
                </section>
                <section>
                    {/* You may want to lift state to Home.js from /build & /saved
                    you can pass props through <BuildSeq /> */}
                    <Switch>
                        <Route exact path="/home/build" >
                            <BuildSeq/>
                        </Route>
                        <Route path="/home/saved" >
                            <SavedSeq />
                        </Route>
                        <Route path="/home/manage" component={MangAcct} />
                    </Switch>
                </section>
            </div>
        )
    }
export default Home;