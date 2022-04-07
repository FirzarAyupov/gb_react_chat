import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

const initialState = {
  conversation: ["room1", "room2", "room3"],
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
    default:
      return state;
  }
};
