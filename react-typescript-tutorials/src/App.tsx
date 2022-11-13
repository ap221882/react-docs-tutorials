import React, { useState } from "react";
import "./App.css";

interface AppProps {
  headerText: string;
  extraTest?: string;
}

interface User {
  name: string;
  age: number;
  country: string;
}

function App({ headerText, extraTest = "I am the default text" }: AppProps) {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () =>
    setUser({
      name: "Ajay",
      age: 22,
      country: "India",
    });

  return (
    <>
      <h1 className='header'>{headerText}</h1>
      <p className='paragraph'>{extraTest}</p>
      <div className='button-container'>
        <button onClick={fetchUser}>Fetch user on click</button>
      </div>
      {user && <p className='paragraph para'>{user.name}</p>}
    </>
  );
}

export default App;
