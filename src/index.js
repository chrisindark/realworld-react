import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import store from './store';

import App from './components/App';
// import Home from './components/Home';
// import Article from './components/Article';
// import Editor from './components/Editor';
// import Header from './components/Header';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import ProfileFavorites from './components/ProfileFavorites';
// import Register from './components/Register';
// import Settings from './components/Settings';
// import registerServiceWorker from './registerServiceWorker';


const history = createBrowserHistory();

ReactDOM.render((
  <Provider store={store} history={history}>
    <BrowserRouter>
      <Route path="/" component={App}>
      {/*<Route path="home" component={Home} />*/}
      {/*<Route path="login" component={Login} />*/}
      {/*<Route path="register" component={Register} />*/}
      {/*<Route path="editor" component={Editor} />*/}
      {/*<Route path="editor/:slug" component={Editor} />*/}
      {/*<Route path="article/:id" component={Article} />*/}
      {/*<Route path="settings" component={Settings} />*/}
      {/*<Route path="@:username" component={Profile} />*/}
      {/*<Route path="@:username/favorites" component={ProfileFavorites} />*/}
      </Route>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// registerServiceWorker();
