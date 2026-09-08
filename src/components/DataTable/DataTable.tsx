import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import "./DataTable.scss";

export type SortDirection = "asc" | "desc" | null;

export interface DataTableColumn<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
  width?: string;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  pageSize?: number;
  rowKey?: keyof T;
  className?: string;
  emptyMessage?: string;
}

export function DataTable<T extends object>({
  columns,
  data,
  pageSize = 5,
  rowKey,
  className = "",
  emptyMessage = "No data available",
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDir) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDir === "asc" ? aVal - bVal : bVal - aVal;
      }
      const aStr = String(aVal);
      const bStr = String(bVal);
      return sortDir === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [data, sortKey, sortDir]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  const safePage = Math.min(currentPage, totalPages - 1);
  const paginatedData = sortedData.slice(
    safePage * pageSize,
    safePage * pageSize + pageSize
  );

  const handleSort = (col: DataTableColumn<T>) => {
    if (!col.sortable) return;
    if (sortKey === col.key) {
      if (sortDir === "asc") setSortDir("desc");
      else if (sortDir === "desc") {
        setSortDir(null);
        setSortKey(null);
      } else setSortDir("asc");
    } else {
      setSortKey(col.key);
      setSortDir("asc");
    }
    setCurrentPage(0);
  };

  const getSortIcon = (col: DataTableColumn<T>) => {
    if (!col.sortable) return null;
    if (sortKey !== col.key || !sortDir)
      return <ChevronsUpDown size={14} className="dt-sort-icon" />;
    return sortDir === "asc" ? (
      <ChevronUp size={14} className="dt-sort-icon-active" />
    ) : (
      <ChevronDown size={14} className="dt-sort-icon-active" />
    );
  };

  return (
    <div className={`dt-wrapper ${className}`}>
      <div className="dt-scroll">
        <table className="dt-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  style={col.width ? { width: col.width } : undefined}
                  className={col.sortable ? "dt-th-sortable" : ""}
                  onClick={() => handleSort(col)}
                >
                  <span className="dt-th-content">
                    {col.header}
                    {getSortIcon(col)}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="dt-empty">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginatedData.map((row, i) => (
                <tr key={rowKey ? String(row[rowKey]) : i}>
                  {columns.map((col) => (
                    <td key={String(col.key)}>
                      {col.render ? col.render(row) : String(row[col.key])}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {sortedData.length > pageSize && (
        <div className="dt-pagination">
          <span className="dt-page-info">
            Page {safePage + 1} of {totalPages} · {sortedData.length} rows
          </span>
          <div className="dt-page-controls">
            <button
              type="button"
              disabled={safePage === 0}
              onClick={() => setCurrentPage(safePage - 1)}
              className="dt-page-btn"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              disabled={safePage >= totalPages - 1}
              onClick={() => setCurrentPage(safePage + 1)}
              className="dt-page-btn"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTable;
