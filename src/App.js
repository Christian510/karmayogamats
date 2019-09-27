import React, { Component } from 'react';
import './components/App/App.sass';
import { Link } from 'react-router-dom';
import routes from './routes';
import Logo from './assets/KYM-logo.png';
import './components/Nav/LoginNav.sass';
import './components/Home/Home.sass';              // These styles will  need to get moved to App.js
import './components/Footer/footer.sass';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toLogin: false
    }
    this.basState = this.state
  }


  handleLogin() {
    this.setState({
      toLogin: true
    })
  }
  render() {
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
