import {
  getConversationSucces,
  getConversationStart,
  getConversationError,
  createConversationStart,
  createConversationSucces,
  createConversationError,
} from "./actions";

export const getConversation = (page) => async (dispatch, _, api) => {
  const conversation = [];

  try {
    dispatch(getConversationStart());

    const snapshot = await api.getConversationApi(page);

    snapshot.forEach((snap) => {
      conversation.push(snap.val());
    });

    dispatch(getConversationSucces(conversation));
  } catch (e) {
    dispatch(getConversationError(e));
  }
};

export const createConversationFB =
  (conversation) => async (dispatch, _, api) => {
    try {
      dispatch(createConversationStart());
      await api.createConversationApi(conversation);
      dispatch(createConversationSucces(conversation));
    } catch (e) {
      createConversationError(e);
    }
  };
