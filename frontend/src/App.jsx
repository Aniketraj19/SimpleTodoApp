import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./coponents/CreateTodo";
import { Todos } from "./coponents/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    console.log(json);
    setTodos(json);
  });

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
