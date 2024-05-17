"use client";

import { useTasks } from "@/app/hooks/useTasks";

export default function Form() {
  const { addTask } = useTasks();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTask(e.target.task.value);
    e.target.task.value = "";
  };

  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center gap-8">
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            placeholder="Input New Task"
            className="p-2 pl-5 rounded-l-full"
          />
          <button
            type="submit"
            className="hover:bg-[#cf7f7f] bg-[#ff7575] text-white font-bold py-2 px-4 rounded-r-full"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
