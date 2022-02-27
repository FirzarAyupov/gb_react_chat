 export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="Это 1 тестовое сообщение!"/>
        <Message text="Это 2 тестовое сообщение!"/>
        <Message text="Это 3 тестовое сообщение!"/>
      </header>
    </div>
  );
}

export function Message(props) {
  return (
    <p className="Message">{ props.text }</p>
  );
}