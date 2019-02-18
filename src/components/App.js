import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, withRouter} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {onLoad, onRedirect, onGetUser} from '../actions/app';
import Auth from '../utils/auth';


class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      this.props.history.push(nextProps.redirectTo);
      this.props.onRedirect();
    }
    if (nextProps.token && !nextProps.user) {
      Auth.setAuthToken(nextProps.token);
      this.getCurrentUser();
    }
  }

  componentWillMount() {
    const token = Auth.getAuthToken();

    this.props.onLoad({
      appLoaded: true,
      token: token
    });
  }

  getCurrentUser = () => {
    Auth.currentUser().then(res => {
      if (res.status === 200) {
        this.props.onGetUser({
          user: res.data.user
        });
      }
    });
  };

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header appName={this.props.appName} currentUser={this.props.user} />
          <Route path="/home" component={Home} appName={this.props.appName} token={this.props.token} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      );
    }

    return (
      <div>
        <p>loading...</p>
        <Route path="/home" component={Home}
               appName={this.props.appName} token={this.props.token} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  token: state.common.token,
  user: state.common.user,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({onLoad, onRedirect, onGetUser}, dispatch)
);

// const mapDispatchToProps = dispatch => ({
//   onLoad: (payload, token) => {
//     dispatch({type: 'APP_LOAD', payload, token, skipTracking: true})
//   },
//   onRedirect: () => {
//     dispatch({type: 'REDIRECT'})
//   }
// });

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);
export default withRouter(AppConnect);
// export default App;
