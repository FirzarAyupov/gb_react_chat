import {
  CREATE_CONVERSATION,
  GET_CONVERSATION_START,
  GET_CONVERSATION_SUCCES,
  GET_CONVERSATION_ERROR,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  conversation: [],
  pending: false,
  error: null,
};

export const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversation: [...state.conversation, action.payload],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversation: state.conversation.filter(
          (conversation) => conversation !== action.payload
        ),
      };
    case GET_CONVERSATION_START:
      return { ...state, pending: true, error: null };
    case GET_CONVERSATION_SUCCES:
      return { ...state, pending: false, conversation: action.payload };
    case GET_CONVERSATION_ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};
