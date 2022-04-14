import { getGistsStart, getGistsSucces, getGistsError } from "./actions";

export const getGists = (page) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsStart());

    const { data } = await api.getPublicGistsApi(page);

    dispatch(getGistsSucces(data));
  } catch (e) {
    dispatch(getGistsError(e));
  }
};
