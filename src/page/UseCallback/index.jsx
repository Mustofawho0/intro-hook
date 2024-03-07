import { useState, useCallback } from "react";
import { ReactDOM } from "react-dom/client";
import Todos from "./Todos";

export default function UseCallbackComponents() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCounter((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
  return (
    <>
      <div>
        <Todos todos={todos} addTodo={addTodo} />
      </div>
      <hr />
      <div>
        <p>Counter : {counter}</p>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
