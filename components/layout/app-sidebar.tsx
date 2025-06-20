"use client";
import * as React from "react";
import {
  Languages,
  Menu,
  MessageCircleMore,
  PanelLeft,
  User,
} from "lucide-react";
import { NavMain } from "@/components/layout/nav-main";
import { TeamSwitcher } from "@/components/layout/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Apartment, Employer, Home, Report } from "@/public/icons";
import { ThemeToggleButton } from "./theme-selector";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar
      collapsible="icon"
      dir="rtl"
      {...props}
      className="!font-sirwan_reguler  relative"
    >
      <SidebarHeader className="bg-white dark:bg-background md:rounded-tl-2xl dark:rounded-none  relative">
        <div className="absolute top-16 end-0 md:end-0 p1 sm:bg-white rounded-md cursor-pointer dark:bg-black/15 hover:text-primary transition-all duration-300">
          <Menu onClick={toggleSidebar} size={17} />
        </div>
        <TeamSwitcher isHead={false} />
      </SidebarHeader>
      <SidebarContent className="bg-white dark:bg-background   !font-sirwan_reguler ">
        <NavMain items={data.projects} />
      </SidebarContent>
      <div className="absolute bottom-10 left-5">
        <ThemeToggleButton />
      </div>
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
      icon: Report,
      isActive: true,
    },
    {
      title: "ئەلف و بێ کوردی",
      url: "/alpha-bets",
      icon: Languages,
      isActive: true,
    },
    {
      title: "بەکارهێنەرەکان",
      url: "/users",
      icon: User,
      isActive: true,
    },
    {
      title: "فیدباکەکان",
      url: "/feedback",
      icon: MessageCircleMore,
      isActive: true,
    },
    {
      title: "ئەدمینەکان",
      url: "/admin",
      icon: Employer,
      isActive: true,
    },
  ],
};
