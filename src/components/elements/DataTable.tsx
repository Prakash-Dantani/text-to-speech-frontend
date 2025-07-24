import { useTable, Column } from "react-table";

interface DataTableProps<T extends object> {
  columns: readonly Column<T>[]; // read-only array of column definitions
  data: T[]; // data rows of type T (generic)
}

// Rewritten as arrow function
const DataTable = <T extends object>({ columns, data }: DataTableProps<T>) => {
  // Call useTable hook to get table utilities
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<T>({ columns, data });

  return (
    <table {...getTableProps()} className="min-w-full border border-gray-300">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="px-4 py-2 border">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row); // Required for react-table to set row props & cells
          return (
            <tr {...row.getRowProps()} className="border-t">
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="px-4 py-2 border">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
