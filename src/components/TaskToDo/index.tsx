import { CheckBox, CheckBoxLabel, EditBtn, Task, TrashCan } from "./styled";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

interface TaskToDoProps {
  id: number;
  value: string;
  status: boolean;
  deleteTask: (id: number) => void;
  editTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;
}

export function TaskToDo({
  id,
  value,
  status,
  deleteTask,
  editTask,
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
      <EditBtn>
        <FaRegEdit
          size={25}
          onClick={() => {
            editTask(id);
          }}
        />
      </EditBtn>
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
