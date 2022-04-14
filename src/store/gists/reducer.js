import { GET_GISTS_START, GET_GISTS_SUCCES, GET_GISTS_ERROR } from "./types";

const initialState = {
  gists: [],
  console: null,
  pending: false,
};

export const gistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return { ...state, pending: true, error: null };
    case GET_GISTS_SUCCES:
      return { ...state, pending: false, gists: action.payload };
    case GET_GISTS_ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};
