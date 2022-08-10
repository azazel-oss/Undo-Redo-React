import { useContext } from "react";
import { CountContext } from "./countContext";

export default function Decrementer() {
  const { dispatch } = useContext(CountContext);
  function handleDecrement() {
    dispatch({ type: "DECREMENT" });
  }
  return <button onClick={handleDecrement}>Decrementer</button>;
}
