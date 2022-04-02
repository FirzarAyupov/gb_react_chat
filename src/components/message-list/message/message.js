import { format } from "date-fns";
import cls from "classnames";
import styles from "./message.module.css";

export function Message({ message }) {
  return (
    <div
      className={cls(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.author}</h3>
      <p>{message.message}</p>
      <p>{format(message.date, "yyyy-MM-dd HH:mm:ss")}</p>
    </div>
  );
}
