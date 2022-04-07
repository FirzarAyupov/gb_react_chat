import { UPDATE_PROFILE, TOGGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
  isVisibleProfile: true,
  isAdminProfile: false,
  firstName: "firstName",
  lastName: "lastName",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      console.log(action);
      return {
        ...state,
        ...action.payload,
      };
    case TOGGLE_VISIBLE_PROFILE:
      return { ...state, isVisibleProfile: !state.isVisibleProfile };
    default:
      return state;
  }
};
