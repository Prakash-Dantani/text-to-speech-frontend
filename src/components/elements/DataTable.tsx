import {
  useTable,
  useGlobalFilter,
  usePagination,
  Column,
  TableInstance,
  UsePaginationInstanceProps,
  UseGlobalFiltersInstanceProps,
  TableState,
} from "react-table";

interface DataTableProps<T extends object> {
  columns: readonly Column<T>[];
  data: T[];
}

const GlobalFilter = ({
  globalFilter,
  setGlobalFilter,
}: {
  globalFilter: string;
  setGlobalFilter: (filterValue: string) => void;
}) => {
  return (
    <span className="mb-4 block">
      Search:{" "}
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="border px-2 py-1 rounded"
        placeholder="Type to filter..."
      />
    </span>
  );
};

const DataTable = <T extends object>({ columns, data }: DataTableProps<T>) => {
  const tableInstance = useTable<T>(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 } as Partial<TableState<T>>,
    },
    useGlobalFilter,
    usePagination
  ) as TableInstance<T> &
    UsePaginationInstanceProps<T> &
    UseGlobalFiltersInstanceProps<T>; // ✅ This fixes the error

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state as any;

  return (
    <div>
      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <table
        {...getTableProps()}
        className="table w-full border border-gray-300"
      >
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
          {page.map((row) => {
            prepareRow(row);
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

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="btn btn-sm"
        >
          Prev
        </button>
        <span>
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="btn btn-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
