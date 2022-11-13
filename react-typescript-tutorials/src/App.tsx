import React from "react";
import "./App.css";

interface AppProps {
  headerText: string;
}

function App({ headerText }: AppProps) {
  return <h1 className='header'>{headerText}</h1>;
}

export default App;
