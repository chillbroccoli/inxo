import ky from "ky";

import { CreateTaskInput } from "../schemas/create-task.schema";
import { Tasks } from "../xata";

export const task = {
  async getAll(): Promise<Tasks[]> {
    const res = await ky.get("/api/tasks");
    return res.json();
  },

  async create(data: CreateTaskInput) {
    const res = await ky.post("/api/tasks", { json: data });
    return res.json();
  },
};
