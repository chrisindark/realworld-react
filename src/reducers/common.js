const defaultState = {
  appName: 'Conduit',
  token: null,
  redirectTo: null,
  user: null,
  // viewChangeCounter: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return Object.assign(state, action.payload);
      // return {
        // ...state,
        // appLoaded: action.payload.appLoaded,
        // token: action.payload.token || null,
        // currentUser: action.payload.user ? action.payload.user : null
      // };
    case 'GET_USER':
      return {...state, user: action.payload.user};
    case 'REDIRECT':
      return { ...state, redirectTo: null };
    // case 'LOGOUT':
    //   return { ...state, redirectTo: '/', token: null, currentUser: null };
    // case 'ARTICLE_SUBMITTED':
    //   const redirectUrl = `article/${action.payload.article.slug}`;
    //   return { ...state, redirectTo: redirectUrl };
    // case 'SETTINGS_SAVED':
    //   return {
    //     ...state,
    //     redirectTo: action.error ? null : '/',
    //     user: action.error ? null : action.payload.user
    //   };
    case 'LOGIN':
    case 'REGISTER':
      return {
        ...state,
        redirectTo: action.payload.errors ? null : '/home',
        token: action.payload.errors ? null : action.payload.user.token,
        // user: action.payload.errors ? null : action.payload.user
      };
    // case 'DELETE_ARTICLE':
    //   return { ...state, redirectTo: '/' };
    // case 'ARTICLE_PAGE_UNLOADED':
    // case 'EDITOR_PAGE_UNLOADED':
    // case 'PROFILE_PAGE_UNLOADED':
    // case 'PROFILE_FAVORITES_PAGE_UNLOADED':
    // case 'SETTINGS_PAGE_UNLOADED':
    // case 'LOGIN_PAGE_UNLOADED':
    // case 'REGISTER_PAGE_UNLOADED':
    //   return { ...state, viewChangeCounter: state.viewChangeCounter + 1 };
    default:
      return state;
  }

};
