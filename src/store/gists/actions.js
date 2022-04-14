import { GET_GISTS_START, GET_GISTS_SUCCES, GET_GISTS_ERROR } from "./types";

export const getGistsStart = () => ({
  type: GET_GISTS_START,
});

export const getGistsSucces = (gists) => ({
  type: GET_GISTS_SUCCES,
  payload: gists,
});

export const getGistsError = (e) => ({
  type: GET_GISTS_ERROR,
  payload: e,
});
