import {
  CREATE_CONVERSATION,
  GET_CONVERSATION_START,
  GET_CONVERSATION_SUCCES,
  GET_CONVERSATION_ERROR,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

export const createConversation = (conversation) => {
  return { type: CREATE_CONVERSATION, payload: conversation };
};

export const deleteConversation = (conversation) => {
  return { type: DELETE_CONVERSATION, payload: conversation };
};

export const getConversationStart = () => ({
  type: GET_CONVERSATION_START,
});

export const getConversationSucces = (conversation) => ({
  type: GET_CONVERSATION_SUCCES,
  payload: conversation,
});

export const getConversationError = (e) => ({
  type: GET_CONVERSATION_ERROR,
  payload: e,
});
