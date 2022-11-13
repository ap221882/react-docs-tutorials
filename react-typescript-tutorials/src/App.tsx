import React from "react";
import "./App.css";

interface AppProps {
  headerText: string;
  extraTest?: string;
}

function App({ headerText, extraTest = "I am the default text" }: AppProps) {
  return (
    <>
      <h1 className='header'>{headerText}</h1>
      <p className='paragraph'>{extraTest}</p>
    </>
  );
}

export default App;
