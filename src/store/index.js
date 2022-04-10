import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { logger, botMessage, timeScheduler } from "./middlewares";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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
});

export const store = createStore(
  persistReducer(persistConfig, reducer),
  compose(
    applyMiddleware(thunk, logger, botMessage, timeScheduler),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
