import React, { Component } from 'react';
import Axios from 'axios';
import './components/App/App.sass';
import { Route, Switch } from 'react-router-dom';
// Glyph Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { } from '@fortawesome/free-solid-svg-icons'
import './components/Nav/LoginNav.sass';
import './components/Footer/footer.sass';
import './components/Nav/LoginNav';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Register from './components/Registration/Registration';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import SavedSeq from './components/SaveSeq/SaveSeq';
import ResetPass from './components/RestPW/ResetPass';
import LoginNav from './components/Nav/LoginNav';
import Footer from './components/Footer/Footer';
library.add(fab);
// I believe I need to lift state to App.js for all user account related activities.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state for login link
      toLogin: false,
      // state for Login.js, Registration, Manage Acct and Reset PW
      users: [],
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      password: '',
      isLoggedIn: false

    }
  }


  componentDidMount() {
    console.log("did mount")
    Axios.get('/api/users/get_users')
      .then(res => {
        console.log("===== Success! =====");
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log('=====  Failure =====');
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <LoginNav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/home" component={Home} />
          <Route
            path="/register"
            render={props => (
              <Register {...props} users={this.state.users} />
            )} />
          <Route
            path="/login"
            render={props => (
              <Login {...props} users={this.state.users} />
            )} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/saved" component={SavedSeq} />
          <Route path="/ResetPass" component={ResetPass} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
