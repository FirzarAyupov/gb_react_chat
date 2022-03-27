import React from "react";
import { MessageList, Layout, ChatList } from "./components";

/*
export function Message(props) {
  return <p className="Message">{props.text}</p>;
}*/

export const App = () => {
  return <Layout messages={<MessageList />} chats={<ChatList />} />;
};
