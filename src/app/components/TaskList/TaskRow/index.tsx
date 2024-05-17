import { Task } from "@/app/hooks/types";

interface TaskRowInterface {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskRow(props: TaskRowInterface) {
  const { task, onToggleComplete, onDelete } = props;

  const { id, name, completed } = task;

  return (
    <li
      key={id}
      className={
        "flex justify-center align-middle items-center gap-2 " +
        (completed && "line-through")
      }
    >
      <input
        type="checkbox"
        onChange={() => onToggleComplete(id)}
        checked={completed}
      />
      {name}

      <button onClick={() => onDelete(id)}>
        <i className="fa-solid fa-trash-can text-[#ff7575] text-lg"></i>
      </button>
    </li>
  );
}
