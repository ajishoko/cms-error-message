import React, {Component} from 'react';
import {connect} from 'react-redux';

import Input from '../components/input';
import Button from '../components/button';
/**
 * @author : Yudistira Ramadhan (yudistira.ramadhan@kudo.co.id)
 * 
 * 
 */
const Recaptcha = require('react-recaptcha');

// specifying verify callback function
var recaptchaToken = '';

var verifyCallback = function(response) {
  return (recaptchaToken = response);
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      loading: false,
    };
    this.handleRequestLogin = this.handleRequestLogin.bind(this);
  }

  handleRequestLogin(e) {
    this.handlingState('loading', true);
    e.preventDefault();

    if (!this.state.email || !this.validatePassword(this.state.password)){
      this.handlingState('errorMessage', 'username or password cannot be blank');
      this.handlingState('loading', false);
    } 
    else if (!recaptchaToken){
      this.handlingState('errorMessage', 'invalid recaptcha');
      this.handlingState('loading', false);
    }  
    else {
      this.handlingState('errorMessage', null);
      this.redirectAfterLogin();
    }
  }

  // validate password
  validatePassword(passwordString) {
    return passwordString.length >= 1;
  }

  // handling state
  handlingState(attribute, value) {
    this.setState({
      [attribute]: value,
    });
  }

  // redirect after login button had clicked
  redirectAfterLogin = () => {
    this.props.history.push('/message');
  };

  render() {
    return (
      <div className="page-wrapper page-login">
        <div className="flex-wrapper height-100">
          <div className="form-wrapper">
            <div className="text-center mb-5">
              <h1 onClick={e => this.handleRequestLogin(e)}>
                <img src={'./images/kudo-logo.png'} alt="Kudo" height="40px" /> <b>Error Config</b>
              </h1>
            </div>
            <form onSubmit={this.handleRequestLogin}>
              <Input
                theme="primary"
                placeholder="Email or Username"
                onChange={e => this.handlingState('email', e.target.value)}
                value={this.state.email}
                disabled={this.state.loading}
              />
              <Input
                theme="primary"
                placeholder="Password"
                type="password"
                onChange={e => this.handlingState('password', e.target.value)}
                value={this.state.password}
                disabled={this.state.loading}
              />
              <div className="mt-2">
                <Recaptcha
                  sitekey='6Lf_XGMUAAAAAHNRn6pn9S6Lm5aKUmX09SvTmp17'
                  render="explicit"
                  verifyCallback={verifyCallback}
                />
              </div>
              <p style={{color: 'red'}}>{this.state.errorMessage}</p>
              <div className="mt-2">
                <Button label="LOGIN" buttonType="borderless" theme="primary" fullWidth="true" />
              </div>
            </form>
            <footer className="mt-5">
              <hr />
              <small>
                Copyright Kudo Teknologi Indonesia <span className="float-right">&copy; 2018</span>
              </small>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    responseLogin: state.responseLogin,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Login);
