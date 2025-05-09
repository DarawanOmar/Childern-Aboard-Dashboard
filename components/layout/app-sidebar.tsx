"use client";
import { FaUser } from "react-icons/fa";
import * as React from "react";
import { PanelLeft, User } from "lucide-react";
import { NavMain } from "@/components/layout/nav-main";
import { TeamSwitcher } from "@/components/layout/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DebtsIconsSideBar,
  Apartment,
  Employer,
  Home,
  Report,
  Setting,
  Servics,
  UnitIncome,
  ReciveMoney,
  InvoiceIcon,
} from "@/public/icons";

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
      {/* <SidebarFooter className="bg-white dark:bg-background md:rounded-bl-2xl dark:rounded-none ">
        <TeamSwitcher isHead />
      </SidebarFooter> */}
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
      title: "شوقەکان",
      url: "/apartments",
      icon: Apartment,
      isActive: true,
    },
    {
      title: "دانیشتوان",
      url: "/pouplation",
      icon: Employer,
      isActive: true,
    },
    {
      title: "خاوەنموڵک",
      url: "/owner",
      icon: FaUser,
      isActive: true,
    },
    {
      title: "خزمەتگوزاریەکان",
      url: "/services",
      icon: Servics,
      isActive: true,
    },
    {
      title: "یەکە هاتووەکان",
      url: "/unit-income",
      icon: UnitIncome,
      isActive: true,
    },

    {
      title: "پارەوەرگرتن",
      url: "/recive-money",
      icon: ReciveMoney,
      isActive: true,
    },
    {
      title: "قەرزەکان",
      url: "/debts",
      icon: DebtsIconsSideBar,
      isActive: true,
    },

    {
      title: "ڕاپۆرت",
      url: "/report",
      icon: Report,
      isActive: true,
    },
    {
      title: "پسووڵەکان",
      url: "/invoices",
      icon: InvoiceIcon,
      isActive: true,
    },
    {
      title: "ڕێکخستنەکان",
      url: "/setting",
      icon: Setting,
      isActive: true,
    },
  ],
};
