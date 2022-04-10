import { format } from "date-fns";
import cls from "classnames";
import styles from "./message.module.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages/actions";

export const Message = ({ message, children, roomId }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={cls(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <div>
        <h3>{message.author}</h3>
        <p>{message.message}</p>
        {children}
        <p>{format(message.date, "yyyy-MM-dd HH:mm:ss")}</p>
      </div>

      <Button
        color="info"
        onClick={() => dispatch(deleteMessage(roomId, message?.id))}
      >
        x
      </Button>
    </div>
  );
};
