import {
  getConversationSucces,
  getConversationStart,
  getConversationError,
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
