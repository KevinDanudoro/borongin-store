"use client";

import React from "react";
import type { FC } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import data from "./avatarmenu-data";
import { signOutUserController } from "@/controller/user";
import { useToast } from "@/components/ui/use-toast";

interface AvatarMenuProps extends React.HTMLAttributes<HTMLSpanElement> {}

const AvatarMenu: FC<AvatarMenuProps> = ({ className, ...props }) => {
  const { toast } = useToast();
  const handleSignOut = async () => {
    const signOutedUser = await signOutUserController();
    if (signOutedUser !== null) {
      toast({
        title: "Success to sign out",
        description: `Goodbye ${signOutedUser.username}`,
        variant: "success",
      });
      window.location.href = "/sign-in";
    } else {
      toast({
        title: "Failed to sign out",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className={className} {...props}>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-5 top-2 p-2 bg-foreground/60 border-foreground backdrop-blur-md">
        {data.map((value) => {
          const Icon = value.icon;
          return (
            <DropdownMenuItem
              key={value.title}
              className={cn({
                "w-56 space-x-4 p-2 text-background": true,
                "focus:bg-primary focus:text-primary-foreground":
                  value.title === "Sign Out",
              })}
              onClick={() => value.href === "/sign-in" && handleSignOut()}
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
