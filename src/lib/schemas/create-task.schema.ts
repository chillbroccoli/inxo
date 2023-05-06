import { z } from "zod";

export const createTaskSchema = z.object({
  status: z.string().min(1),
  dueDate: z.date(),
  name: z.string().min(1),
  priority: z.string().min(1),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
