import "@tanstack/react-table";

declare module "@tanstack/table-core" {
  interface TableMeta<TData extends RowData> {
    editTableData: (product: string, quantity: number) => void;
  }
}
