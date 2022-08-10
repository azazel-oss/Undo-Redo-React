import { useContext } from "react";
import { CountContext } from "./countContext";

export default function Incrementer() {
  const { dispatch } = useContext(CountContext);
  function handleIncrement() {
    dispatch({ type: "INCREMENT" });
  }
  return <button onClick={handleIncrement}>Incrementer</button>;
}
