
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//  *** Routes ***
import Main from './components/Main/Main'; // Should route to App.js move the contents of home to App.js
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Registration/Registration';
import Checkout from './components/Checkout/Checkout';
import BuildSeq from './components/BuildSeq/BuildSeq';
import SavedSeq from './components/SaveSeq/SaveSeq';
// import MangAcct from './components/MangAcct/MangAcct';
import ResetPass from './components/RestPW/ResetPass';


export default ( 
    <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/home" component={ Home } />
        <Route path="/home/build" component={ BuildSeq } />
        <Route path="/home/manage" component={ MangAcct } />
        <Route path="/home/saved" component={ Home } />
        <Route path="/register" component={ Register } />
        <Route 
            path="/login" 
            render={ routeProps => (
                <Login { ...routeProps } />
            )} />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/saved" component={ SavedSeq } />
        <Route path="/ResetPass" component={ ResetPass } />
    </Switch>
 );