import React from "react";
import { DataTable } from "./DataTable";
import type { DataTableColumn } from "./DataTable";
import { Badge } from "@/components/Badge/Badge";

interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  salary: number;
}

const users: User[] = [
  { id: 1, name: "Alice Johnson", role: "Frontend Dev", status: "active", salary: 95000 },
  { id: 2, name: "Bob Smith", role: "Backend Dev", status: "active", salary: 88000 },
  { id: 3, name: "Carol White", role: "Designer", status: "pending", salary: 72000 },
  { id: 4, name: "Dan Brown", role: "DevOps", status: "active", salary: 91000 },
  { id: 5, name: "Eva Green", role: "Product Manager", status: "inactive", salary: 105000 },
  { id: 6, name: "Frank Blue", role: "QA Engineer", status: "active", salary: 68000 },
  { id: 7, name: "Grace Lee", role: "Fullstack Dev", status: "pending", salary: 99000 },
  { id: 8, name: "Henry Park", role: "Data Scientist", status: "active", salary: 112000 },
  { id: 9, name: "Ivy Chen", role: "UX Researcher", status: "inactive", salary: 76000 },
  { id: 10, name: "Jack Wilson", role: "Tech Lead", status: "active", salary: 130000 },
  { id: 11, name: "Karen Davis", role: "Frontend Dev", status: "active", salary: 89000 },
  { id: 12, name: "Leo Martinez", role: "Backend Dev", status: "pending", salary: 84000 },
];

const columns: DataTableColumn<User>[] = [
  { key: "id", header: "ID", sortable: true, width: "60px" },
  { key: "name", header: "Name", sortable: true },
  { key: "role", header: "Role", sortable: true },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (row) => {
      const variant =
        row.status === "active"
          ? "emerald"
          : row.status === "pending"
            ? "amber"
            : "red";
      return <Badge label={row.status} variant={variant} dot size="sm" />;
    },
  },
  {
    key: "salary",
    header: "Salary",
    sortable: true,
    render: (row) => `$${row.salary.toLocaleString()}`,
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
        {title}
      </h2>
      <div className="flex flex-wrap gap-5 items-stretch bg-white dark:bg-zinc-800/80 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 p-6">
        {children}
      </div>
    </div>
  );
}

export function DataTablePreview() {
  return (
    <div>
      <Section title="Data Table — Sortable Columns with Pagination">
        <div className="w-full">
          <DataTable
            columns={columns}
            data={users}
            pageSize={5}
            rowKey="id"
          />
        </div>
      </Section>

      <Section title="Data Table — Smaller Page Size">
        <div className="w-full">
          <DataTable
            columns={columns.slice(0, 3)}
            data={users}
            pageSize={3}
            rowKey="id"
          />
        </div>
      </Section>
    </div>
  );
}

export default DataTablePreview;
