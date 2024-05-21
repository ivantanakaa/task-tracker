export type Priority = "high" | "mid" | "low";

export interface Task {
  id: number;
  name: string;
  priority: Priority;
  completed: boolean;
}
