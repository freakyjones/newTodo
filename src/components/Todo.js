import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Todo = () => {
  // useState is a Hook that lets you add React state to function components
  // useEffect is a Hook that lets you perform side effects in function components
  // useEffect is used to fetch data from an API when the component mounts
  // useState is used to manage the state of the todos
  // useEffect is used to fetch the todos from the API
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);
  return (
    <div>
      <h2>Todo</h2>
      <div>
        <h1>To-Do List</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
// PropTypes validation
Todo.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
};
