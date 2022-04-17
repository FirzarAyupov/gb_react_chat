import {
  sendMessage,
  getMessagesStart,
  getMessagesSucces,
  getMessagesError,
  createMessagesStart,
  createMessagesSucces,
  createMessagesError,
} from "./actions";
import { nanoid } from "nanoid";

export const sendMessageWithBot = (roomId, message) => (dispatch, getState) => {
  dispatch(sendMessage(roomId, message));

  if (true) {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, {
          author: "Bot",
          message: "Hello from bot thunk",
        })
      );
    }, 700);
  }
};

export const getMessages = () => async (dispatch, _, api) => {
  const messages = {};

  try {
    dispatch(getMessagesStart());

    const snapshot = await api.getMessagesApi();

    snapshot.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSucces(messages));
  } catch (e) {
    dispatch(getMessagesError(e));
  }
};

export const createMessageFb =
  (roomId, message) => async (dispatch, _, api) => {
    try {
      dispatch(createMessagesStart());

      const nextMessage = {
        ...message,
        date: new Date().getTime(),
        id: nanoid(),
      };

      await api.createMessageApi(nextMessage, roomId);

      dispatch(createMessagesSucces(nextMessage, roomId));
    } catch (e) {
      dispatch(createMessagesError(e));
    }
  };
