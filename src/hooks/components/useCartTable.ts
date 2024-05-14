import { useEffect, useState } from "react";
import { z } from "zod";
import { useDebouncedCallback } from "use-debounce";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  removeCartController,
  setCartQuantityController,
} from "@/controller/cart";
import { tableCartSchema } from "@/model/cart";

const useCartTable = (
  data: z.infer<typeof tableCartSchema>[],
  columns: ColumnDef<z.infer<typeof tableCartSchema>>[]
) => {
  const [tableData, setTableData] = useState(data);
  useEffect(() => {
    if (data.length > 0) setTableData(data);
  }, [data]);

  const setTableDataQuantity = async (productId: string, quantity: number) => {
    setTableData((prevData) =>
      prevData.map((prev) =>
        prev._id === productId ? { ...prev, quantity } : { ...prev }
      )
    );
  };
  const syncTableData = useDebouncedCallback(async () => {
    const cartsPromise = tableData.map((data) =>
      data.quantity > 0
        ? setCartQuantityController(data._id, data.quantity)
        : removeCartController(data._id)
    );
    const carts = await Promise.all(cartsPromise);
    const isAllSuccess =
      carts.filter((cart) => cart.statusCode !== 200).length === 0;

    if (isAllSuccess)
      setTableData((prev) => {
        const updatedTable =
          carts[carts.length - 1].data?.map((c) => ({
            _id: c.product._id,
            image: c.product.imageUrl[0],
            name: c.product.name,
            price: c.product.price,
            quantity: c.quantity,
          })) ?? prev;

        return updatedTable;
      });
  }, 2000);

  const editTableData = (productId: string, quantity: number) => {
    setTableDataQuantity(productId, quantity);
    syncTableData();
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
