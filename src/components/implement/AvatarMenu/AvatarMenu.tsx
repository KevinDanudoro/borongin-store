import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import type { FC } from "react";
import data from "./avatarmenu-data";
import { cn } from "@/lib/utils";

interface AvatarMenuProps extends React.HTMLAttributes<HTMLSpanElement> {}

const AvatarMenu: FC<AvatarMenuProps> = ({ className, ...props }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className={className} {...props}>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-5 top-2 p-2">
        {data.map((value) => {
          const Icon = value.icon;
          return (
            <DropdownMenuItem
              key={value.title}
              className={cn({
                "w-56 space-x-4 p-2": true,
                "focus:bg-primary focus:text-primary-foreground":
                  value.title === "Sign Out",
              })}
            >
              <Icon /> <p>{value.title}</p>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
