"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Task {
  title: string;
  completed: boolean;
}

export default function Form() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks =
      typeof window !== undefined
        ? window?.localStorage?.getItem("tasks")
        : false;
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTask({ title: e.target.task.value, completed: false });
    e.target.task.value = "";
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center gap-8">
        <Image src={"/logo.png"} alt="logo" width={300} height={40} />
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
      <ul className="flex flex-col justify-start items-start w-[300px]">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={
              "flex justify-center align-middle items-center gap-2 " +
              (task.completed && "line-through")
            }
          >
            <input
              type="checkbox"
              onChange={() => toggleTaskCompletion(index)}
              checked={task.completed}
            />
            {task.title}
            {/* <button onClick={() => deleteTask(index)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
