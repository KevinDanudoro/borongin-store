import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { tableCartSchema } from "@/model/cart";

export const columns: ColumnDef<z.infer<typeof tableCartSchema>>[] = [
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => (
      <div className="font-medium flex flex-row gap-4 items-center">
        <Image
          src={row.original.image}
          alt={row.original.image + " image"}
          width={64}
          height={64}
        />
        <p>{row.original.name}</p>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => "Rp." + row.getValue("price")?.toLocaleString(),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row, table }) => (
      <Input
        type="number"
        className="w-20"
        onChange={(e) => {
          table.options.meta?.editTableData(
            row.original._id,
            parseInt(e.target.value)
          );
        }}
        value={row.getValue("quantity")}
        min={0}
      />
    ),
  },
  {
    id: "sub",
    accessorKey: "sub",
    header: () => <p className="text-right w-32">Sub Total</p>,
    cell: ({ row }) => (
      <p className="text-right">
        {"Rp." +
          (
            parseInt(row.getValue("price")) * parseInt(row.getValue("quantity"))
          ).toLocaleString()}
      </p>
    ),
  },
];
