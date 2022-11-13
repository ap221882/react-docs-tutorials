import React, { createContext, useReducer } from "react";

const initialState = {
  inputValue: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "SET_INPUT_VALUE_TO_100":
      return {
        ...state,
        inputValue: 100,
      };
    default:
      return state;
  }
};

const InputValueContext = createContext({
  state: initialState,
  dispatch: () => {},
});

function InputValueProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {children}
    </InputValueContext.Provider>
  );
}

export { InputValueContext, InputValueProvider };
