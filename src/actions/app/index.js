export const onLoad = (payload) => {
  return {
    type: 'APP_LOAD',
    payload,
    // skipTracking: true
  };
};

export const onRedirect = () => {
  return {
    type: 'REDIRECT'
  }
};

export const onGetUser = (payload) => {
  return {
    type: 'GET_USER',
    payload
  }
};
