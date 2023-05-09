import { zodResolver } from "@hookform/resolvers/zod";
import { SelectValue } from "@radix-ui/react-select";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { task } from "~/lib/api";
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from "~/lib/constants/options";
import QUERY_KEYS from "~/lib/constants/query-keys";
import { queryClient } from "~/lib/query-client";
import { CreateTaskInput, createTaskSchema } from "~/lib/schemas/create-task.schema";

import { Input } from "../atoms/Input";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { SelectContent, SelectItem, SelectTrigger } from "../ui/select";

export function CreateTaskModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const methods = useForm<CreateTaskInput>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      dueDate: new Date(),
    },
  });
  const { handleSubmit, reset } = methods;

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: task.create,
    onSuccess: async () => {
      await queryClient.invalidateQueries([QUERY_KEYS.GET_ALL_TASKS]);
      setIsModalOpen(false);
      reset();
    },
  });

  const onSubmit = async (data: CreateTaskInput) => {
    await mutateAsync(data);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button>Create New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Input.Text name="name" label="Name" placeholder="Tasks name..." />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Input.Select name="priority" label="Priority">
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRIORITY_OPTIONS.map((item) => (
                      <SelectItem value={item.value} key={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Input.Select>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Input.Select name="status" label="Status">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {STATUS_OPTIONS.map((item) => (
                      <SelectItem value={item.value} key={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Input.Select>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Input.DatePicker name="dueDate" label="Due Date" />
              </div>
            </div>

            <div className="flex items-center justify-end mt-6">
              <Button type="submit" isLoading={isLoading}>
                Create
              </Button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
