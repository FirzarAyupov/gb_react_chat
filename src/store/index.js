import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistReducer } from "./gists";
import { getPublicGistsApi, searchGistsByNameApi } from "../api/gists";
import {
  getConversationApi,
  createConversationApi,
} from "../api/conversations";
import { getMessagesApi, createMessageApi } from "../api/messages";
import { logger, botMessage, timeScheduler } from "./middlewares";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const apis = {
  getPublicGistsApi,
  searchGistsByNameApi,
  getConversationApi,
  getMessagesApi,
  createMessageApi,
  createConversationApi,
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile"],
};

const reducer = combineReducers({
  profile: profileReducer,
  conversation: conversationReducer,
  messages: messagesReducer,
  gists: gistReducer,
});

export const store = createStore(
  persistReducer(persistConfig, reducer),
  compose(
    applyMiddleware(
      thunk.withExtraArgument(apis),
      logger,
      botMessage,
      timeScheduler
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
