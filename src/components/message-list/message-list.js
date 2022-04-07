import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./use-styles";
import { Message } from "./message/message";
import { useParams } from "react-router-dom";
import { sendMessage } from "../../store/messages";

export function MessageList() {
  const ref = useRef();
  const { roomId } = useParams();
  const dispatch = useDispatch();

  const messages = useSelector((state) => {
    return state.messages.messages[roomId] ?? [];
  });

  const [value, setValue] = useState("");

  const styles = useStyles();

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessage(roomId, { author: author || "Bot", message }));
        setValue("");
      }
    },
    [roomId, dispatch]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        send("Hello from Bot", "Bot");
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages, roomId, send]);

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
              <Send className={styles.icon} onClick={() => send(value)} />
            )}
          </InputAdornment>
        }
      />
    </>
  );
}
