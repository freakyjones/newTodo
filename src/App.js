import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <p>Welcome to the Todo App!</p>
      <p>This is a simple todo application built with React.</p>
      <p>Here you can add, remove, and manage your tasks.</p>
      <p>To get started, add a new task below:</p>
      <Todo />
    </div>
  );
}

export default App;
