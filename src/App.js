import React, { useState } from "react";

 export function App() {

  const [ text, setText ] = useState();
  const [ author, setAuthor ] = useState();

  const [ messageList, sendMessageList ] = useState([]); 

  const newMessage = () => {
    console.log(author);
    addMessage({
      'author': author,
      'text': text
    })
  }

  const addMessage = (newMessage) => {
    sendMessageList([...messageList, newMessage])
  }

  let res = messageList.map(function(item) {
    console.log(item);
    return <div>
       <p>{item.author}</p>
       <p>{item.text}</p>
    </div>;
 });

  return (
    <div className="App">
      { res }
        <label>Автор:</label>
        <input type="text" value={author} onChange={event => setAuthor(event.target.value)} />
        <label>Текст:</label>
        <input type="text" value={text} onChange={event => setText(event.target.value)} />
        <button onClick={() => newMessage()}>Send</button>
    </div>
  );
}

export function Message(props) {
  return (
    <p className="Message">{ props.text }</p>
  );
}