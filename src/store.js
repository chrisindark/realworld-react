import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';
// import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';


const getMiddlewares = () => {
//   if (process.env.NODE_ENV === 'production') {
//     return applyMiddleware(promiseMiddleware, localStorageMiddleware);
//   } else {
//     // Enable additional logging in non-production environments.
//     return applyMiddleware(promiseMiddleware, localStorageMiddleware, createLogger());
//   }
  if (window.localStorage.getItem('redux-debug')) {
    return applyMiddleware(createLogger());
  }
};

const REDUX_STATE_FROM_SERVER = typeof window !== 'undefined' ? window.STATE_FROM_SERVER : null;

const store = createStore(
  reducer, REDUX_STATE_FROM_SERVER,
  getMiddlewares()
);

export default store;
