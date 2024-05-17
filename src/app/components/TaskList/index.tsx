import { useTasks } from "@/app/hooks/useTasks";

export default function TaskList() {
  const { tasks, toggleTask } = useTasks();
  const toggleTaskCompletion = (id: number) => {
    toggleTask(id);
  };
  return (
    <ul className="flex flex-col justify-start items-start w-[300px] mt-6">
      {tasks.toReversed().map((task, index) => (
        <li
          key={index}
          className={
            "flex justify-center align-middle items-center gap-2 " +
            (task.completed && "line-through")
          }
        >
          <input
            type="checkbox"
            onChange={() => toggleTaskCompletion(task.id)}
            checked={task.completed}
          />
          {task.name}
          {/* <button onClick={() => deleteTask(index)}>Delete</button> */}
        </li>
      ))}
    </ul>
  );
}
