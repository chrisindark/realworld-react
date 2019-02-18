import { combineReducers } from 'redux';

import common from './reducers/common';
import home from './reducers/home';
import auth from './reducers/auth';
// import article from './reducers/article';
// import articleList from './reducers/articleList';
// import editor from './reducers/editor';
// import profile from './reducers/profile';
// import profileFavorites from './reducers/profileFavorites';
// import settings from './reducers/settings';

export default combineReducers({
  common,
  home,
  auth,
  // article,
  // articleList,
  // editor,
  // profile,
  // profileFavorites,
  // settings
});
