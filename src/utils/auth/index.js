import request from '../axios';

import {AUTH_TOKEN_KEY} from '../../constants';


let instance = null;

class Auth {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  authTokenKey = AUTH_TOKEN_KEY;

  isAuthenticated = () => {
    return !!window.localStorage.getItem(this.authTokenKey);
  };

  getAuthToken = () => {
    return window.localStorage.getItem(this.authTokenKey) ? window.localStorage.getItem(this.authTokenKey) : null;
  };

  setAuthToken = (token) => {
    return window.localStorage.setItem(this.authTokenKey, token);
  };

  login = (payload) => request.post('/users/login/', payload);

  register = (payload) => request.post('/users/', payload);

  currentUser = () => request.get('/users/');
}


export default new Auth();
