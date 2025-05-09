"use client";
import * as React from "react";
import { PanelLeft } from "lucide-react";
import { NavMain } from "@/components/layout/nav-main";
import { TeamSwitcher } from "@/components/layout/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Apartment, Employer, Home } from "@/public/icons";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar
      collapsible="icon"
      dir="rtl"
      {...props}
      className="!font-sirwan_reguler  md:!rounded-l-2xl dark:rounded-none shadow-xl "
    >
      <SidebarHeader className="bg-white dark:bg-background md:rounded-tl-2xl dark:rounded-none  relative">
        <div className="absolute top-10 end-0 md:-end-2 p1 sm:bg-white rounded-md cursor-pointer dark:bg-black/15 hover:text-primary transition-all duration-300">
          <PanelLeft onClick={toggleSidebar} size={17} />
        </div>
        <TeamSwitcher isHead={false} />
      </SidebarHeader>
      <SidebarContent className="bg-white dark:bg-background   !font-sirwan_reguler ">
        <NavMain items={data.projects} />
      </SidebarContent>
    </Sidebar>
  );
}
const data = {
  projects: [
    {
      title: "سەرەکی",
      url: "/main",
      icon: Home,
      isActive: true,
    },
    {
      title: "کاتەگۆری",
      url: "/category",
      icon: Apartment,
      isActive: true,
    },
    {
      title: "دیتەیل کاتەگۆری",
      url: "/details",
      icon: Employer,
      isActive: true,
    },
  ],
};
