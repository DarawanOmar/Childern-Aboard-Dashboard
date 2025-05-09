"use client";

import * as React from "react";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LogoutIcon } from "@/public/icons";
import logo from "@/public/Logo.svg";

export function TeamSwitcher({ isHead }: { isHead: boolean }) {
  const { open } = useSidebar();

  return isHead ? (
    <>
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-primary data-[state=open]:text-sidebar-accent-foreground flex items-center hover:bg-primary hover:text-white transition-all duration-300"
      >
        <div
          className={cn(
            "flex aspect-square h-[36px] w-[36px] items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground",
            {
              "size-8": !open,
            }
          )}
        >
          <Image
            src={logo}
            alt="Avana-Soft"
            height={300}
            width={300}
            quality={100}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-start">ئاڤانە سۆفت</span>
        </div>
        <div className="mr-auto">
          <LogoutIcon height={16} />
        </div>
      </SidebarMenuButton>
    </>
  ) : (
    <>
      <div className="flex justify-center items-center my-5">
        <div className="flex  gap-3 items-center">
          <p
            className={cn("font-sirwan-meduim", {
              hidden: !open,
            })}
          >
            Children Dashboard
          </p>
          <Image
            src={logo}
            alt="Logo-Restaurant"
            height={35}
            width={35}
            className={cn("rounded-full object-cover mx-auto size-[35px]", {
              "size-[25px]": !open,
            })}
          />
        </div>
      </div>
    </>
  );
}
