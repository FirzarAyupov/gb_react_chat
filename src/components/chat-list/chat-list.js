import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { List, Button } from "@mui/material";
import { Chat } from "./chat";
import {
  createConversation,
  deleteConversation,
  conversationsSelector,
} from "../../store/conversations";

export function ChatList() {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const { conversation, pending } = useSelector(conversationsSelector);
  const navigate = useNavigate();

  const create = () => {
    const name = prompt("Введите название новой комнаты");

    const isValidName = !conversation.includes(name);

    if (!!name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Не правильное название");
    }
  };

  const deleteCb = (conversation) => {
    dispatch(deleteConversation(conversation));
    navigate("/chat");
  };

  if (pending) {
    return <h1>pending...</h1>;
  }
  return (
    <List component="nav">
      <Button onClick={create}>Создать комнату</Button>

      {conversation.map((chat, index) => (
        <div style={{ display: "flex" }} key={index}>
          <Button onClick={() => deleteCb(chat)}>X</Button>
          <Link key={index} to={`/chat/${chat}`}>
            <Chat title={chat} selected={roomId === chat} />
          </Link>
        </div>
      ))}
    </List>
  );
}
