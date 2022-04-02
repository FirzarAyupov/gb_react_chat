import {
  UPDATE_PROFILE,
  TOGGLE_VISIBLE_PROFILE,
  CHECKED_CHECKBOX_PROFILE,
} from "./types";

export const updateProfile = (profile) => {
  console.log("profile: ", profile);
  return { type: UPDATE_PROFILE, payload: profile };
};

export const toggleVisibleProfile = () => {
  return { type: TOGGLE_VISIBLE_PROFILE };
};
export const checkedCheckboxProfile = () => {
  return { type: CHECKED_CHECKBOX_PROFILE };
};
