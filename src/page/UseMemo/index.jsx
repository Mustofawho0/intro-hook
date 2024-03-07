import { useEffect, useMemo, useState } from "react";

export default function UseMemoComponents() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const incrementNumber = () => setNumber((prev) => prev + 1);
  const incrementCounter = () => setCounter((prev) => prev + 1);

  useEffect(() => {
    console.log("Number Change");
  }, [number]);
  useEffect(() => {
    console.log("Counter Change");
  }, [counter]);

  const expensiveCalculation = () => {
    let i = 0;
    while (i < 200000000) i++;
    return number % 2 === 0;
  };
  const calculation = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <>
      <div>
        <p>Number : {number}</p>
      </div>
      <div>
        <p>Counter : {counter}</p>
      </div>
      {/* <div>{calculation}</div> */}
      <div>Number Odd or Even : {calculation ? "even" : "odd"}</div>
      <div>
        <button onClick={incrementNumber}> Number : {number} </button>
      </div>
      <div>
        <button onClick={incrementCounter}> Counter : {counter} </button>
      </div>
    </>
  );
}
