import { signOut } from "@/lib/authActions";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import React from "react";

interface RoutesProps {
  isLoggedIn: boolean;
}

export const Routes: React.FC<RoutesProps> = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="/dashboard"
            >
              Dashboard
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="/jobs"
            >
              Jobs
            </NavigationMenuLink>
          </NavigationMenuItem>

          <form action={signOut}>
            <NavigationMenuItem>
              <Button variant="ghost">Logout</Button>
            </NavigationMenuItem>
          </form>
        </>
      ) : (
        <>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="/register"
            >
              Sign Up
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="/login"
            >
              Login
            </NavigationMenuLink>
          </NavigationMenuItem>
        </>
      )}
    </>
  );
};
