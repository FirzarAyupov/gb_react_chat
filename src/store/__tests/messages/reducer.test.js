import {
  messagesReducer,
  deleteMessage,
  getMessagesStart,
  getMessagesSucces,
  getMessagesError,
  createMessagesStart,
  createMessagesSucces,
  createMessagesError,
} from "../../messages";
import { conversationReducer, deleteConversation } from "../../conversations";

describe("messages reducer", () => {
  describe("other types", () => {
    it("delete message by id", () => {
      const state = messagesReducer(
        {
          messages: {
            room1: [{ id: 1 }, { id: 2 }],
          },
        },
        deleteMessage("room1", 1)
      );
      expect(state.messages.room1.length).toBe(1);
      expect(state.messages.room1.find((m) => m.id === 1)).toBeUndefined();

      expect(state).toEqual({
        messages: {
          room1: [{ id: 2 }],
        },
      });
    });

    it("delete conversation", () => {
      const state = messagesReducer(
        {
          messages: {
            room1: [],
            room2: [],
          },
        },
        deleteConversation("room1")
      );

      expect(state).toEqual({
        messages: {
          room2: [],
        },
      });
    });
  });

  describe("get messages", () => {
    it("start", () => {
      const state = messagesReducer(
        {
          pending: false,
          error: "error",
        },
        getMessagesStart()
      );
      expect(state.pending).toBe(true);
      expect(state.error).toBeNull();
    });

    it("succes", () => {
      const state = messagesReducer(
        {
          pending: true,
          messages: null,
        },
        getMessagesSucces("test")
      );
      expect(state.pending).toBeFalsy();
      expect(state.messages).toBe("test");
    });

    it("error", () => {
      const state = messagesReducer(
        {
          pending: true,
          error: null,
        },
        getMessagesError("error")
      );
      expect(state.pending).toBeFalsy();
      expect(state.error).toBe("error");
    });
  });

  describe("create messages", () => {
    it("start", () => {
      const state = messagesReducer(
        {
          pendingSendMessage: false,
          errorSendMessage: "error",
        },
        createMessagesStart()
      );
      expect(state.pendingSendMessage).toBe(true);
      expect(state.errorSendMessage).toBeNull();
    });

    it("succes", () => {
      const state = messagesReducer(
        {
          pendingSendMessage: true,
          messages: {},
        },
        createMessagesSucces("test message", "room1")
      );
      expect(state.pendingSendMessage).toBeFalsy();
      expect(state.messages).toEqual({ room1: ["test message"] });
    });

    it("error", () => {
      const state = messagesReducer(
        {
          pendingSendMessage: true,
          errorSendMessage: null,
        },
        createMessagesError("error")
      );
      expect(state.pendingSendMessage).toBeFalsy();
      expect(state.errorSendMessage).toBe("error");
    });
  });
});
