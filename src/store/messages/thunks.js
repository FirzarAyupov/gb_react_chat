import { sendMessage } from "./actions";

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
