import {
  UPDATE_PROFILE,
  TOGGLE_VISIBLE_PROFILE,
  CHECKED_CHECKBOX_PROFILE,
} from "./types";

const initialState = {
  isVisibleProfile: true,
  isCheckedCheckbox: false,
  firstName: "firstName",
  lastName: "lastName",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case TOGGLE_VISIBLE_PROFILE:
      return { ...state, isVisibleProfile: !state.isVisibleProfile };
    case CHECKED_CHECKBOX_PROFILE:
      return { ...state, isCheckedCheckbox: !state.isCheckedCheckbox };
    default:
      return state;
  }
};
