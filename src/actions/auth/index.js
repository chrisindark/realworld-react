export const onChangeEmail = (payload) => {
  return {
    type: 'CHANGE_AUTH_FIELD',
    payload
  };
};

export const onChangePassword = (payload) => {
  return {
    type: 'CHANGE_AUTH_FIELD',
    payload
  };
};

export const onChangeUsername = (payload) => {
  return {
    type: 'CHANGE_AUTH_FIELD',
    payload
  };
};

export const onSubmitStart = () => {
  return {
    type: 'AUTH_START'
  };
};

export const onSubmitFinish = (payload) => {
  return {
    type: 'AUTH_FINISH',
    payload
  };
};

export const onUnload = () => {
  return {
    type: 'AUTH_PAGE_UNLOADED'
  };
};
