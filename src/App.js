import Form from "./Form";
import { CountContext } from "./countContext";
import { useContext } from "react";

export default function App() {
  const { state } = useContext(CountContext);
  return (
    <div className="App">
      <h2>Count: {state.historyArray[state.currentIndex]}</h2>
      <Form />
    </div>
  );
}
