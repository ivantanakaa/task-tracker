"use client";

import { useTasks } from "@/app/hooks/useTasks";
import TaskRow from "./TaskRow";

export default function TaskList() {
  const { tasks, toggleTask, removeTask } = useTasks();
  const toggleCompletion = (id: number) => {
    toggleTask(id);
  };
  return (
    <ul className="flex flex-col justify-start items-start w-[364px] mt-6">
      {tasks.toReversed().map((task, index) => (
        <TaskRow
          key={index}
          task={task}
          onDelete={removeTask}
          onToggleComplete={toggleCompletion}
        />
      ))}
    </ul>
  );
}
