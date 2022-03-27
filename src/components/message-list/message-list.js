import { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./use-styles";
import { Message } from "./message/message";

export function MessageList() {
  const ref = useRef();
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    {
      author: "Bot",
      text: "message1",
      date: new Date().toLocaleDateString(),
    },
  ]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  const styles = useStyles();

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        { author: "User", text: value, date: new Date().toLocaleDateString() },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessagesAuthor = messages[messages.length - 1].author;
      let timerId = null;

      if (lastMessagesAuthor === "User") {
        timerId = setTimeout(() => {
          setMessages([
            ...messages,
            {
              author: "Bot",
              text: "Message from bot",
              date: new Date().toLocaleDateString(),
            },
          ]);
        }, 500);
      }

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messages]);

  return (
    <div>
      <div>
        <div>
          {messages.map((message) => (
            <Message message={message} key={message.date} />
          ))}
        </div>
        <Input
          id="outlined-basic"
          label="Автор:"
          variant="outlined"
          className={styles.input}
          placeholder="Введите сообщение ..."
          type="text"
          autoFocus={true}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              {value && <Send className={styles.icon} onClick={sendMessage} />}
            </InputAdornment>
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handlePressInput}
        />
      </div>
    </div>
  );
}
