import { useState } from "react";
import { InputToDo } from "../InputToDo";
import { ITask } from "../../types/types";
import { TaskToDo } from "../TaskToDo";

export function FormToDo() {
  const arrTasks: ITask[] = [];
  const [toDo, setToDo] = useState("");
  const [tasks, setTasks] = useState(arrTasks);
  const [selectedTasks, setSelectedTasks] = useState("");

  let copyTasks = tasks;

  function addTask() {
    if (!toDo) {
      return;
    }
    const taskTodo = {
      id: Math.random(),
      value: toDo,
      status: false,
    };

    const newTask: ITask[] = [taskTodo, ...tasks];

    setTasks(newTask);
    setToDo("");
  }

  function deleteTask(id: number) {
    const afterDeleteTasks = tasks.filter((task) => task.id !== id);
    setTasks(afterDeleteTasks);
  }

  function toggleTaskStatus(id: number) {
    const afterToggleTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: !task.status } : { ...task },
    );
    setTasks(afterToggleTasks);
  }

  switch (selectedTasks) {
    case "all":
      copyTasks = tasks;
      break;
    case "active":
      copyTasks = tasks.filter((task) => task.status === false);
      break;
    case "completed":
      copyTasks = tasks.filter((task) => task.status === true);
      break;
    default:
      break;
  }

  const tasksList = copyTasks.map((task) => (
    <TaskToDo
      key={task.id}
      id={task.id}
      value={task.value}
      status={task.status}
      deleteTask={deleteTask}
      toggleTaskStatus={toggleTaskStatus}
    />
  ));

  return (
    <section>
      <InputToDo addTask={addTask} toDo={toDo} setToDo={setToDo} />
      <div style={{ padding: "5px 10px" }}>{tasksList}</div>
      <button onClick={() => setSelectedTasks("all")}>All</button>
      <button onClick={() => setSelectedTasks("active")}>Active</button>
      <button onClick={() => setSelectedTasks("completed")}>Completed</button>
    </section>
  );
}
