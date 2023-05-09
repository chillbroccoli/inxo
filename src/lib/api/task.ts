import ky from "ky";

import { APIRoutes } from "../constants/routes";
import { CreateTaskInput } from "../schemas/create-task.schema";
import { Tasks } from "../xata";

export const task = {
  async getAll(): Promise<Tasks[]> {
    const res = await ky.get(APIRoutes.TASKS);
    return res.json();
  },

  async create(data: CreateTaskInput) {
    const res = await ky.post(APIRoutes.TASKS, { json: data });
    return res.json();
  },
};
