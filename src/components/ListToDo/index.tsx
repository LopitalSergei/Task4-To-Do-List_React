import { ITask } from "../../types/types";
import { TaskToDo } from "../TaskToDo";

interface ListToDoProps {
  tasks: ITask[];
  deleteTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;
}

export function ListToDo({
  tasks,
  deleteTask,
  toggleTaskStatus,
}: ListToDoProps) {
  return (
    <>
      {tasks.map((task) => (
        <TaskToDo
          key={task.id}
          id={task.id}
          value={task.value}
          status={task.status}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      ))}
    </>
  );
}
