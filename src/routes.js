
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//  *** Routes ***
import Home from '../components/Home';
import Login from '../components/Login';
import Registration from '../components/Registration';
import Checkout from '../components/Checkout';
import BuildSeq from    '../components/BuildSeq';
import SavedSeq from    '../components/SavedSeq';
import MangAcct from '../components/MangAcct';


export default ( 
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/register" component={ Registration } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/checkout" component={ Checkout } />
        <Route exact path="/build" component={ BuildSeq } />
        <Route exact path="/view-saved" component={ SavedSeq } />
        <Route exact path="/manage" component={ MangAcct } />
    </Switch>
 );