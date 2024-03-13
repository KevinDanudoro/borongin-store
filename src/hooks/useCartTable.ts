import { Product } from "@/type/product";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const useCartTable = (data: Product[], columns: ColumnDef<Product>[]) => {
  const [tableData, setTableData] = useState(data);

  const editTableData = (product: string, quantity: number) => {
    setTableData((prev) => {
      if (quantity === 0) {
        const updatedTable = prev.filter((value) => value.name !== product);
        return updatedTable;
      }

      const index = prev.findIndex((value) => value.name === product);
      const updatedTable = prev;
      updatedTable[index].quantity = quantity;
      return [...updatedTable];
    });
  };

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      editTableData,
    },
  });

  return { data: tableData, setData: setTableData, table };
};

export default useCartTable;
