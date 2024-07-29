// import { useState } from "react";
import { useState } from "react";
import { ITask } from "../../types/types";
import { UpdateButton, InputRow, Input } from "./styled";

interface InputToDoProps {
  editTask: (value: string, task: ITask) => void;
  task: ITask;
}
export function EditToDo({ editTask, task }: InputToDoProps) {
  const [value, setValue] = useState(task.value);
  return (
    <InputRow>
      <Input
        placeholder="Update task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="inputField"
      />
      <UpdateButton onClick={() => editTask(value, task)}>
        Update todo
      </UpdateButton>
    </InputRow>
  );
}
