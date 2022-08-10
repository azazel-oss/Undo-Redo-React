import { useContext } from "react";
import { CountContext } from "./countContext";

export default function Undo() {
  const { dispatch } = useContext(CountContext);
  function handleUndo() {
    dispatch({ type: "UNDO" });
  }
  return <button onClick={handleUndo}>Undo</button>;
}
