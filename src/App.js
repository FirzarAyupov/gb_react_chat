import React, { useState, useEffect } from "react";

export function App() {
  const [text, setText] = useState();
  const [author, setAuthor] = useState();

  const [messageList, setMessageList] = useState([]);

  const newMessage = () => {
    addMessage({
      author: author,
      text: text,
    });
  };

  const addMessage = (newMessage) => {
    setMessageList([...messageList, newMessage]);
  };

  let res = messageList.map(function (item) {
    console.log(item);
    return (
      <div className="Message">
        <span className="MessageAuthor">{item.author}</span>
        <p className="MessageText">{item.text}</p>
      </div>
    );
  });

  useEffect(() => {
    console.log(messageList);
    if (messageList.length > 0) {
      const lastMessagesAuthor = messageList[messageList.length - 1].author;
      let timerId = null;

      if (lastMessagesAuthor !== "bot") {
        timerId = setTimeout(() => {
          setMessageList([
            ...messageList,
            { author: "bot", text: "Message from bot" },
          ]);
        }, 500);
      }

      return () => {
        console.log("componentWillUnmount");
        clearInterval(timerId);
      };
    }
  }, [messageList]);

  return (
    <div className="App">
      {res}
      <div className="MessagePanel">
        <label>
          Автор:
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </label>
        <label>
          Текст:
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>
        <button onClick={() => newMessage()}>Send</button>
      </div>
    </div>
  );
}

export function Message(props) {
  return <p className="Message">{props.text}</p>;
}
