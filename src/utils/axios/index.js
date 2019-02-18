import axios from 'axios';

import {API_ROOT, AUTH_TOKEN_KEY} from '../../constants';


// const encode = encodeURIComponent;
const responseBody = res => res;
const errorBody = err => err.response;


export default {
  del: (url, config) =>
    axios.delete(`${API_ROOT}${url}`).then(responseBody).catch(errorBody),
  get: (url, config) =>
    axios.get(`${API_ROOT}${url}`, config).then(responseBody).catch(errorBody),
  put: (url, data, config) =>
    axios.put(`${API_ROOT}${url}`, data, config).then(responseBody).catch(errorBody),
  post: (url, data, config) =>
    axios.post(`${API_ROOT}${url}`, data, config).then(responseBody).catch(errorBody),
};


const getTokenHeader = (config) => {
  const token = window.localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    // console.log(config.headers.common);
    return {
      ...config, Authorization: `Token ${token}`
    };
  }
  return config;
};


// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // set token in authorization header for every request if available
  config.headers.common = getTokenHeader(config.headers.common);
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
