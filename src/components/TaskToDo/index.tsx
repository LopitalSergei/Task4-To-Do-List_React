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
    <div key={id.toString()}>
      <input
        type={"checkbox"}
        defaultChecked={status}
        onClick={() => {
          toggleTaskStatus(id);
        }}
      ></input>
      <p
        style={
          status
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {value}
      </p>
      <button
        onClick={() => {
          deleteTask(id);
        }}
      >
        Del
      </button>
    </div>
  );
}
