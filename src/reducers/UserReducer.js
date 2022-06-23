export const initialState = {
  user: null,
};

export const UserReducer = (state, action) => {
  switch ((action, state)) {
    case "setUser":
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
