import { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./use-styles";
import { Message } from "./message/message";
import { useParams } from "react-router-dom";

export function MessageList() {
  const ref = useRef();
  const { roomId } = useParams();

  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState({
    room1: [
      {
        author: "Bot",
        message: "message Bot",
        date: new Date(),
      },
    ],
  });

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.scrollTo(0, ref.current.scrollHeight);
  //   }
  // }, [messageList]);

  const messages = messageList[roomId] ?? [];

  const styles = useStyles();

  const sendMessage = useCallback(
    (message, author = "User") => {
      if (message) {
        setMessageList({
          ...messageList,
          [roomId]: [
            ...(messageList[roomId] ?? []),
            {
              author,
              message,
              date: new Date(),
            },
          ],
        });
        setValue("");
      }
    },
    [messageList, roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
    }
  };

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        sendMessage("Hello from Bot", "Bot");
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messageList, roomId, sendMessage]);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message.date} />
        ))}
      </div>

      <Input
        placeholder="Введите сообщение ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        className={styles.input}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            {value && (
              <Send
                className={styles.icon}
                onClick={() => sendMessage(value)}
              />
            )}
          </InputAdornment>
        }
      />
    </>
  );
}
