import { CheckBox, CheckBoxLabel, Task, TrashCan } from "./styled";
import { FaRegTrashCan } from "react-icons/fa6";

interface TaskToDoProps {
  id: number;
  value: string;
  status: boolean;
  deleteTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;
}

export function TaskToDo({
  id,
  value,
  status,
  deleteTask,
  toggleTaskStatus,
}: TaskToDoProps) {
  return (
    <Task key={id.toString()}>
      <CheckBox
        type={"checkbox"}
        id={id.toString()}
        defaultChecked={status}
        onClick={() => {
          toggleTaskStatus(id);
        }}
      ></CheckBox>
      <CheckBoxLabel htmlFor={id.toString()} status={status}>
        {value}
      </CheckBoxLabel>
      <TrashCan>
        <FaRegTrashCan
          size={25}
          onClick={() => {
            deleteTask(id);
          }}
        />
      </TrashCan>
    </Task>
  );
}
