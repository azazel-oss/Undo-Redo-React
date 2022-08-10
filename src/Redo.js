import { useContext } from "react";
import { CountContext } from "./countContext";

export default function Redo() {
  const { dispatch } = useContext(CountContext);
  function handleRedo() {
    dispatch({ type: "REDO" });
  }
  return <button onClick={handleRedo}>Redo</button>;
}
