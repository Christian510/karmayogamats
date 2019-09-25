
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//  *** Routes ***
import Main from './components/Main/Main'; // Should route to App.js move the contents of home to App.js
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Checkout from './components/Checkout/Checkout';
// import BuildSeq from './components/BuildSeq/BuildSeq';
// import SavedSeq from './components/SaveSeq/SaveSeq';
// import MangAcct from './components/MangAcct/MangAcct';
import ResetPass from './components/Nav/ResetPass';
// import Tabs from './components/Nav/Tabs/Tabs';


export default ( 
    <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/home" component={ Home } />
        <Route path="/register" component={ Registration } />
        <Route path="/login" component={ Login } />
        <Route path="/checkout" component={ Checkout } />
        {/* <Route path="/build" component={ BuildSeq } /> */}
        {/* <Route path="/saved" component={ SavedSeq } /> */}
        {/* <Route path="/manage" component={ MangAcct } /> */}
        <Route path="/ResetPass" component={ ResetPass } />
        {/* <Route path="/Tabs" component={Tabs} /> */}
    </Switch>
 );