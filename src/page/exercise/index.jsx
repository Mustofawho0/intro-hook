import { useEffect, useState } from "react";

export default function Exercise() {
  const [inputText, setInputText] = useState();
  const [error, setError] = useState();

  function onSetInput(a) {
    const valuetype = a.target.value;

    if (valuetype.length <= 15) {
      setInputText(valuetype);
    } else {
      setError("Max value 15 men!");
    }
  }

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  return (
    <>
      <p>{inputText}</p>
      <textarea
        name="text"
        onChange={(a) => onSetInput(a)}
        id=""
        cols="30"
        rows="5"
      ></textarea>
      <p>{error}</p>
    </>
  );
}
