import { createColumnHelper, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import dayjs from "dayjs";
import { useState } from "react";

import { Tasks } from "~/lib/xata";

import { Badge } from "../ui/badge";
import { Table } from "../ui/table";

type Task = {
  id: string;
  name?: string | null;
  priority: string;
  status: string;
  dueDate: Date;
};

const columnHelper = createColumnHelper<Task>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => "Name",
  }),

  columnHelper.accessor("priority", {
    cell: (info) => {
      const value = info.getValue();

      switch (value) {
        case "LOW":
          return <Badge>Low</Badge>;
        case "MEDIUM":
          return <Badge>Medium</Badge>;
        case "HIGH":
          return <Badge>High</Badge>;

        default:
          return null;
      }
    },
    header: () => "Priority",
  }),

  columnHelper.accessor("status", {
    cell: (info) => {
      const value = info.getValue();

      switch (value) {
        case "TODO":
          return <Badge>Todo</Badge>;
        case "IN_PROGRESS":
          return <Badge>In Progress</Badge>;
        case "DONE":
          return <Badge>Done</Badge>;

        default:
          return null;
      }
    },
    header: () => "Status",
  }),

  columnHelper.accessor("dueDate", {
    cell: (info) => <div>{dayjs(info.getValue()).format("DD/MM/YYYY")}</div>,
    header: () => "Date",
  }),
];

export function TasksTable({ tasks }: { tasks: Tasks[] }) {
  const [data] = useState(() => [...tasks]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table table={table} />;
}
