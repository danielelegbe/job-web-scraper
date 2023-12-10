"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Routes } from "@/components/routes";

const routes: { title: string; href: string }[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Jobs",
    href: "/jobs",
  },
];

interface HeaderProps {
  isLoggedIn: boolean;
}
export const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => (
  <header className="border-b">
    <div className="flex items-center justify-between h-14 container">
      <h1 className="font-bold hover:brightness-150">
        <Link href="/">JobFinder</Link>
      </h1>
      <div className="flex">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <Routes routes={routes} isLoggedIn={isLoggedIn} />
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 w-6 md:hidden" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <NavigationMenu className="container">
              <NavigationMenuList className="flex flex-col">
                <Routes routes={routes} isLoggedIn={isLoggedIn} />
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
        <ModeToggle className="ml-2" />
      </div>
    </div>
  </header>
);
