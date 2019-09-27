import React, { Component } from 'react';
import Axios from 'axios';
import './components/App/App.sass';
import { Link } from 'react-router-dom';
import routes from './routes';
import Logo from './assets/KYM-logo.png';
import './components/Nav/LoginNav.sass';
import './components/Footer/footer.sass';

// I believe I need to lift state to App.js for all user account related activities.
class App extends Component {
  constructor() {
    super();
    this.state = {
      // state for login link
      toLogin: false,
      // state for Login.js, Registration, Manage Acct and Reset PW
      users: [],
    }
    this.basState = this.state
  }

  handleLogin() {
    this.setState({
      toLogin: true
    })
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
    console.log(this.state.users[0]);
    return (
      <div>
        <div id="header-border">
          <div className="header">
            <div className="phone">
              <h3>(208)222-2222</h3>
            </div>
            <div id="margin-rt">
              <Link to="/login" id="header-link">Login</Link>
            </div>
          </div>
          <div className="pad-bottom">
            <img className="logo" src={Logo} width="200" alt="KYM" ></img>
          </div>
        </div>
        {routes}
        <div className="footer">
          <div className="footer-logo">
            Logo
            </div>
          <div className="social">
            Social Media
            </div>
        </div>
      </div>
    );
  }
}

export default App;
