"use client";

import { useTasks } from "@/app/hooks/useTasks";
import PriorityPill from "../PriorityPill";
import { Priority } from "@/app/hooks/types";
import { useState } from "react";

export default function Form() {
  const { addTask } = useTasks();
  const [priority, setPriority] = useState<Priority>("high");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTask(e.target.task.value, e.target.priority.value);
    e.target.task.value = "";
  };

  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-center items-center"
      >
        <div className="relative pl-3 flex rounded-l-full justify-left items-center bg-white h-[40px] min-w-[95px]">
          <select
            name="priority"
            value={priority}
            className="opacity-0 absolute h-full w-[80px]"
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            <option value={"high"}>High</option>
            <option value={"moderate"}>Moderate</option>
            <option value={"low"}>Low</option>
          </select>
          <PriorityPill type={priority} />
        </div>
        <input
          name="task"
          type="text"
          placeholder="Input New Task"
          className="p-2 border-l-2 w-full"
        />
        <button
          type="submit"
          className="hover:bg-[#cf7f7f] bg-[#ff7575] min-w-[105px] text-white font-bold py-2 px-4 rounded-r-full"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
