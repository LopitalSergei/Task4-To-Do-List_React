interface InputToDoProps {
  addTask: () => void;
  toDo: string;
  setToDo: (str: string) => void;
}
export function InputToDo({ addTask, toDo, setToDo }: InputToDoProps) {
  return (
    <>
      <input value={toDo} onChange={(e) => setToDo(e.target.value)} />
      <button onClick={() => addTask()}>Add Task</button>
    </>
  );
}
