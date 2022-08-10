import Incrementer from "./Incrementer";
import Decrementer from "./Decrementer";
import Undo from "./Undo";
import Redo from "./Redo";

export default function Form() {
  return (
    <div>
      <Incrementer />
      <Decrementer />
      <Undo />
      <Redo />
    </div>
  );
}
