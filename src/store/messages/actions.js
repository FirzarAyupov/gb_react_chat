import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCES,
  GET_MESSAGES_ERROR,
  CREATE_MESSAGES_START,
  CREATE_MESSAGES_SUCCES,
  CREATE_MESSAGES_ERROR,
} from "./types";

export const sendMessage = (roomId, message) => {
  return {
    type: SEND_MESSAGE,
    payload: { roomId, message },
    meta: { delay: 10 },
  };
};

export const deleteMessage = (roomId, messageId) => {
  return { type: DELETE_MESSAGE, payload: { roomId, messageId } };
};

export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});

export const getMessagesSucces = (messages) => ({
  type: GET_MESSAGES_SUCCES,
  payload: messages,
});

export const getMessagesError = (e) => ({
  type: GET_MESSAGES_ERROR,
  payload: e,
});

export const createMessagesStart = () => ({
  type: CREATE_MESSAGES_START,
});

export const createMessagesSucces = (message, roomId) => ({
  type: CREATE_MESSAGES_SUCCES,
  payload: { message, roomId },
});

export const createMessagesError = (e) => ({
  type: CREATE_MESSAGES_ERROR,
  payload: e,
});
