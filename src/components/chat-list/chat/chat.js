//import styles from "./chat.module.css";
import { ListItemButton, ListItem, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import st from "./chat.module.css";

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

export function Chat({ title, selected, handleListItemClick }) {
  const styles = useStyles();
  return (
    <ListItemButton
      onClick={handleListItemClick}
      className={styles.item}
      selected={selected}
    >
      <ListItem>
        <AccountCircle fontSize="large" className={st.icon} />
      </ListItem>
      <ListItemText primary={title} className={st.text} />
    </ListItemButton>
  );
}
