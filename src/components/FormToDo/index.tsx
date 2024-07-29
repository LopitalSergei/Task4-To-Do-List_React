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
import { EditToDo } from "../EditToDo";

export function FormToDo() {
  const arrTasks: ITask[] = JSON.parse(localStorage.getItem("tasks") || "[]");
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
      isEditing: false,
    };

    const newTasks: ITask[] = [taskTodo, ...tasks];

    setTasks(newTasks);
    setToDo("");
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function deleteTask(id: number) {
    const afterDeleteTasks = tasks.filter((task) => task.id !== id);
    setTasks(afterDeleteTasks);
    localStorage.setItem("tasks", JSON.stringify(afterDeleteTasks));
  }

  function editTask(id: number) {
    const afterEditTasks = tasks.map((task) =>
      task.id === id ? { ...task, isEditing: !task.isEditing } : task,
    );
    setTasks(afterEditTasks);
  }

  function editToDo(value: string, todo: ITask) {
    const afterEditTasks = tasks.map((task) =>
      task.id === todo.id
        ? { ...task, value, isEditing: !task.isEditing }
        : task,
    );
    setTasks(afterEditTasks);
    localStorage.setItem("tasks", JSON.stringify(afterEditTasks));
  }

  function toggleTaskStatus(id: number) {
    const afterToggleTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: !task.status } : { ...task },
    );
    setTasks(afterToggleTasks);
    localStorage.setItem("tasks", JSON.stringify(afterToggleTasks));
  }

  function deleteCompletedTasks() {
    const afterDeleteTasks = tasks.filter((task) => task.status === false);
    setTasks(afterDeleteTasks);
    localStorage.setItem("tasks", JSON.stringify(afterDeleteTasks));
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

  const tasksList = copyTasks.map((task) =>
    task.isEditing ? (
      <EditToDo key={task.id} task={task} editTask={editToDo} />
    ) : (
      <TaskToDo
        key={task.id}
        id={task.id}
        value={task.value}
        status={task.status}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTaskStatus={toggleTaskStatus}
      />
    ),
  );

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
