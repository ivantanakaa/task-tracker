import { createContext, useContext, useEffect, useState } from "react";
import { Task } from "./types";

interface TasksContextInterface {
  tasks: Task[];
  addTask: (taskName: string) => void;
  removeTask: (taskId: number) => void;
  toggleTask: (taskId: number) => void;
}

const defaultValue: TasksContextInterface = {
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  toggleTask: () => {},
};

const TasksContext = createContext<TasksContextInterface>(defaultValue);

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

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

  const addTask = (taskName: string) => {
    const task: Task = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const toggleTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const value = {
    tasks,
    addTask,
    toggleTask,
    removeTask,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
export function useTasks() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error(
      "useTasksContext must be used within a TasksProvider component"
    );
  }

  return context;
}
