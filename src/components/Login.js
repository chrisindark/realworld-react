import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ListErrors from './ListErrors';
import {
  onChangeEmail, onChangePassword, onSubmitStart, onSubmitFinish, onUnload
} from '../actions/auth';
import {onLoginSuccess} from '../actions/common';
import Auth from '../utils/auth';


class Login extends React.Component {
  constructor(props) {
    super(props);

    // this.changeEmail = (e) => {};
    // this.changePassword = (e) => {};
    this.changeEmail = e => this.props.onChangeEmail({key: 'email', value: e.target.value});
    this.changePassword = e => this.props.onChangePassword({key: 'password', value: e.target.value});
    this.submitForm = e => {
      e.preventDefault();
      // const {email, password} = this.props.authForm;
      // this.props.onSubmit(email, password);
      // this.props.onSubmit(this.props.authForm);
      this.login(this.props.authForm);
    };
  }

  login = (payload) => {
    // console.log(payload);
    this.props.onSubmitStart();
    Auth.login(payload).then(res => {
      // console.log(res);
      if (res.status === 200) {
        // console.log();
        this.props.onSubmitFinish({});
        this.props.onLoginSuccess(res.data);
      } else if (res.status === 400) {
        this.props.onSubmitFinish(res.data);
      }
      // this.props.onSubmitFinish();
    });
  };

  componentWillReceiveProps(nextProps, nextContext) {
    // console.log('nextProps', nextProps);
    // console.log('nextContext', nextContext);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    // const email = this.props.email;
    // const password = this.props.password;
    const {email, password} = this.props.authForm;

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="register">
                  Need an account?
                </Link>
              </p>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.changeEmail} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword} />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Sign in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onChangeEmail, onChangePassword, onSubmitStart, onSubmitFinish, onUnload,
    onLoginSuccess,
  }, dispatch)
  // onChangeEmail: value =>
  //   dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  // onChangePassword: value =>
  //   dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  // onSubmit: (email, password) =>
  //   dispatch({ type: 'LOGIN', payload: agent.Auth.login(email, password) }),
  // onUnload: () =>
  //   dispatch({ type: 'LOGIN_PAGE_UNLOADED' })
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
