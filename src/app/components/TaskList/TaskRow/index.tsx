import { Task } from "@/app/hooks/types";
import PriorityPill from "../../PriorityPill";

interface TaskRowInterface {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskRow(props: TaskRowInterface) {
  const { task, onToggleComplete, onDelete } = props;

  const { id, name, completed, priority } = task;

  return (
    <li
      key={id}
      className={
        "flex justify-center align-middle items-center gap-2 p-2"
      }
    >
      <input type="checkbox" className="cursor-pointer" checked={completed} onChange={()=>onToggleComplete(id)} />
      <span className={"ml-2 text-lg cursor-pointer " + (completed && "line-through")} onClick={()=>onToggleComplete(id)}>{name}</span>
      <PriorityPill type={priority} />

      <button onClick={() => onDelete(id)}>
        <i className="fa-solid fa-trash-can text-[#ff7575] text-lg"></i>
      </button>
    </li>
  );
}
