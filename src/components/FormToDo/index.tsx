import { useState } from "react";
import { InputToDo } from "../InputToDo";
import { ITask } from "../../types/types";
import { TaskToDo } from "../TaskToDo";
import {
  ButtonsRow,
  SelectButton,
  TasksContainer,
  Title,
  ToDoSection,
  DeleteButton,
} from "./styled";

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

  function deleteCompletedTasks() {
    const afterDeleteTasks = tasks.filter((task) => task.status === false);
    setTasks(afterDeleteTasks);
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
    <ToDoSection>
      <InputToDo addTask={addTask} toDo={toDo} setToDo={setToDo} />
      <Title>Task list</Title>
      <TasksContainer>{tasksList}</TasksContainer>
      <ButtonsRow>
        <SelectButton onClick={() => setSelectedTasks("all")}>All</SelectButton>
        <SelectButton onClick={() => setSelectedTasks("active")}>
          Active
        </SelectButton>
        <SelectButton onClick={() => setSelectedTasks("completed")}>
          Completed
        </SelectButton>
        <DeleteButton onClick={() => deleteCompletedTasks()}>
          Delete Completed
        </DeleteButton>
      </ButtonsRow>
    </ToDoSection>
  );
}
