type Priority = "high" | "moderate" | "low";

export interface Task {
  id: number;
  name: string;
//   priority: Priority;
  completed: boolean;
}
