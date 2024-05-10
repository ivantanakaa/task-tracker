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
    const savedTasks = localStorage.getItem("tasks");
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
  return (
    <>
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
    </>
  );
}
