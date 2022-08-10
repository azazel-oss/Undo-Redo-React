import React, { createContext, useReducer } from "react";

export const CountContext = createContext();

export function CountContextProvider({ children }) {
  const [state, dispatch] = useReducer(countsReducer, {
    historyArray: [0],
    currentIndex: 0
  });

  function countsReducer(state, action) {
    const temp = [...state.historyArray];
    switch (action.type) {
      case "INCREMENT":
        if (state.currentIndex + 1 < state.historyArray.length) {
          temp.splice(state.currentIndex + 1);
          console.log(temp);
        }
        temp.push(state.historyArray[state.currentIndex] + 1);
        return {
          historyArray: temp,
          currentIndex: state.currentIndex + 1
        };
      case "DECREMENT":
        if (state.currentIndex + 1 < state.historyArray.length) {
          temp.splice(state.currentIndex + 1);
        }
        temp.push(state.historyArray[state.currentIndex] - 1);
        return {
          historyArray: temp,
          currentIndex: state.currentIndex + 1
        };
      case "UNDO":
        return {
          historyArray: state.historyArray,
          currentIndex: state.currentIndex === 0 ? 0 : state.currentIndex - 1
        };
      case "REDO":
        return {
          historyArray: state.historyArray,
          currentIndex:
            state.currentIndex === temp.length - 1
              ? state.currentIndex
              : state.currentIndex + 1
        };
      default:
        return state;
    }
  }

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}
