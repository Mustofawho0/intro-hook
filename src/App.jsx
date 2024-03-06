import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Outlet } from "react-router-dom";
import Exercise from "./page/exercise";

function App() {
  const [getNewName, setNewName] = useState("mustofa");
  function changeNameValue() {
    setNewName("bjir");
  }
  return (
    <>
      {/* <Exercise /> */}
      {/* <h1>My Name : {getNewName}</h1>
      <button onClick={() => changeNameValue()}>Ubah Nama</button> */}
      <Outlet />
    </>
  );
}

export default App;
