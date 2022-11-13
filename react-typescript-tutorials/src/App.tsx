import React, { useState, useContext } from "react";
import "./App.css";
import Form from "./components/Form";
import { InputValueContext } from "./contexts/InputValueProvider";

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

  const { state, dispatch } = useContext(InputValueContext);

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
      <Form />
      <p className='paragraph'>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>
        SET_INPUT_VALUE_TO_100
      </button>
    </>
  );
}

export default App;
