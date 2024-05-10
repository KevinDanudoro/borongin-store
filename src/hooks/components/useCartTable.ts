import { tableCartSchema } from "@/model/cart";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { z } from "zod";

const useCartTable = (
  data: z.infer<typeof tableCartSchema>[],
  columns: ColumnDef<z.infer<typeof tableCartSchema>>[]
) => {
  const [tableData, setTableData] = useState(data);
  useEffect(() => {
    if (data.length > 0) setTableData(data);
  }, [data]);

  const editTableData = (productId: string, quantity: number) => {
    setTableData((prev) => {
      if (quantity === 0) {
        const updatedTable = prev.filter((value) => value._id !== productId);
        return updatedTable;
      }

      // TODO: Hubungkan ke api untuk mengurangi kuantitas produk pada cart
      console.log({ quantity, productId });

      const index = prev.findIndex((value) => value._id === productId);
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
