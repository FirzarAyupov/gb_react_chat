//import styles from "./chat.module.css";
import { ListItemButton, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import st from "./chat.module.css";
import { useSelector } from "react-redux";
import { lastMessageSelector } from "../../../store/messages/selectors";

const useStyles = makeStyles(() => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  };
});

export function Chat({ title, selected, onClick }) {
  const styles = useStyles();
  const message = useSelector(lastMessageSelector(title));

  return (
    <ListItemButton
      className={styles.item}
      selected={selected}
      data-testid="wrapper"
    >
      <div className={st.wrapper}>
        <ListItemText primary={title} className={st.text} onClick={onClick} />

        {message && (
          <ListItemText>
            <ListItemText primary={message.author} className={st.text} />
            <ListItemText primary={message.message} className={st.text} />
          </ListItemText>
        )}
      </div>
    </ListItemButton>
  );
}
