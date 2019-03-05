
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//  *** Routes ***
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import MangAcct from './components/MangAcct';

// Need to organize routes...
export default ( 
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/" component={ Footer } />
        <Route exact path="/" component={ MangAcct } />
        <Route exact path="/" component={ Login } />
    </Switch>
 );