import { useState } from "react";

export default function Exercise() {
  const [inputText, setInputText] = useState();
  const [error, setError] = useState();

  function onSetInput(a) {
    const valuetype = a.target.value;

    if (valuetype.length >= 15) {
      setError("Min value 15 men!");
    } else {
      setInputText(valuetype);
    }
  }

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
