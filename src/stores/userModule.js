const initialState = {
  xAccessToken: '',
};

const action = {
  refreshToken(data) {
    return {
      type: 'USER_REFRESH_TOKEN',
      data: data,
    };
  },
};

const reducer = (state = initialState, action) => {
  let result = state;
  switch (action.type) {
    case 'USER_REFRESH_TOKEN':
      result = {
        ...state,
        xAccessToken: action.data.xAccessToken,
      };
      return result;
    default:
      return state;
  }
};

export { action as userAction, reducer as userReducer };
