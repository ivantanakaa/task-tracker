import Image from "next/image";
import Form from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TasksProvider } from "./hooks/useTasks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <Image src={"/logo.png"} alt="logo" width={300} height={40} />
      <TasksProvider>
        <Form />
        <TaskList />
      </TasksProvider>
    </main>
  );
}
