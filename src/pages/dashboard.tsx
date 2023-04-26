import { GetServerSideProps } from "next";

import { getXataClient, Tasks } from "~/lib/xata";
import { TasksView } from "~/views/Tasks.view";

const xata = getXataClient();

export default function Home({ data }: { data: Tasks[] }) {
  return <TasksView data={data} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await xata.db.tasks.getPaginated({
    pagination: {
      size: 15,
    },
  });

  return {
    props: {
      data: data.records.map((record) => ({
        ...record,
        dueDate: record.dueDate.toISOString(),
      })),
    },
  };
};
