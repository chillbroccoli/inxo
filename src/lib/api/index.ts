import ky from "ky";

import { CreateTaskInput } from "../schemas/create-task.schema";
import { Tasks } from "../xata";

export async function getPaginatedTasks(): Promise<Tasks[]> {
  const res = await ky.get("/api/tasks");
  return res.json();
}

export async function createTask(data: CreateTaskInput) {
  const res = await ky.post("/api/tasks", { json: data });
  return res.json();
}
