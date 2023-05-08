import { useQuery } from "@tanstack/react-query";

import { Loader } from "~/components/atoms/Loader";
import { MainLayout } from "~/components/layouts/MainLayout";
import { CreateTaskModal } from "~/components/modals/CreateTaskModal";
import { TasksTable } from "~/components/tables/tasks";
import { Title } from "~/components/ui/title";
import { task } from "~/lib/api";
import QUERY_KEYS from "~/lib/constants/query-keys";

export function TasksView() {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.ALL_TASKS],
    queryFn: task.getAll,
  });

  return (
    <MainLayout>
      <div className="flex items-center justify-between">
        <Title order="h2">Tasks</Title>
        <CreateTaskModal />
      </div>

      <div className="pt-8">
        {data && <TasksTable tasks={data} />}
        {isLoading && <Loader />}
      </div>
    </MainLayout>
  );
}
