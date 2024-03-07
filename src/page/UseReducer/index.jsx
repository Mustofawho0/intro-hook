import { useReducer } from "react";
import CounterReducer from "./counterSlice";

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(CounterReducer, { counter: 0 });
  // const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    // setCounter(counter + 1)
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    // setCounter(counter - 1)
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <button onClick={handleDecrement}> Decrement </button>
      <p>{state.counter}</p>
      <button onClick={handleIncrement}> Increment </button>
    </div>
  );
}
