export const onLoginSuccess = (payload) => {
  return {
    type: 'LOGIN',
    payload
  }
};

export const onRegisterSuccess = (payload) => {
  return {
    type: 'REGISTER',
    payload
  }
};
