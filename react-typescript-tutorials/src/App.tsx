import React from "react";
import "./App.css";

interface AppProps {
  headerText: string;
  extraTest?: string;
}

function App({ headerText, extraTest }: AppProps) {
  return (
    <>
      <h1 className='header'>{headerText}</h1>
      <p>{extraTest}</p>
    </>
  );
}

export default App;
