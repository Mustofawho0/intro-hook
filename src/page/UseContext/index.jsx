import { useContext, createContext, useState } from "react";

const UserContext = createContext();

export default function UseContextComponent() {
  const [users, setUser] = useState();

  return (
    <>
      <div style={{ border: "1px solid blue", padding: 10 }}>
        <UserContext.Provider value={users}>
          <h1>Components 1</h1>
          <input type="text" onChange={(e) => setUser(e.target.value)} />
          <Components2 />
        </UserContext.Provider>
      </div>
    </>
  );
}

function Components2() {
  const users = useContext(UserContext);
  return (
    <>
      <div style={{ border: "1px solid red", padding: 10 }}>
        <h2>Components 2</h2>
        <p>{users}</p>
        <Components3 />
      </div>
    </>
  );
}

function Components3() {
  const users = useContext(UserContext);
  return (
    <>
      <div style={{ border: "1px solid orange", padding: 10 }}>
        <h3>Components 3</h3>
        <p>{users}</p>
      </div>
    </>
  );
}
