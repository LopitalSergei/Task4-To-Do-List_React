// import { useState } from "react";
import { AddButton, InputRow, Input, FloatingLabel } from "./styled";

interface InputToDoProps {
  addTask: () => void;
  toDo: string;
  setToDo: (str: string) => void;
}
export function InputToDo({ addTask, toDo, setToDo }: InputToDoProps) {
  //   const [value, setValue] = useState("");
  return (
    <InputRow>
      <Input
        placeholder=" "
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        id="inputField"
      />
      <FloatingLabel htmlFor="inputField">Add a new task</FloatingLabel>
      <AddButton onClick={() => addTask()}>Add todo</AddButton>
    </InputRow>
  );
}
