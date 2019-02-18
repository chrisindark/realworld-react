const initialState = {
  authForm: {
    email: '',
    password: '',
    username: '',
    confirm_password: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_FINISH':
      return {
        ...state,
        inProgress: false,
        errors: action.payload.errors ? action.payload.errors : null
      };
    case 'AUTH_PAGE_UNLOADED':
      return {
        ...state, ...initialState
      };
    case 'AUTH_START':
      return {
        ...state,
        inProgress: true
      };
    case 'CHANGE_AUTH_FIELD':
      return {
        ...state,
        authForm: {
          ...state.authForm,
          [action.payload.key]: action.payload.value
        }
      };
    default:
      return state;
  }
};
