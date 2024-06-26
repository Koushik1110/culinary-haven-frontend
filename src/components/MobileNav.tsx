"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound, Menu } from "lucide-react";
import MobileNavLinks from "./MobileNavLinks";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-5">
        <SheetTitle>
          {isAuthenticated ? (
            <div className="flex flex-col items-center gap-2 hover:text-orange-500">
              <Avatar className="w-10 h-10">
                <AvatarImage src={user?.picture} />
                <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{user?.name}</span>
              <span>{user?.email}</span>
            </div>
          ) : (
            <span>Navigation</span>
          )}
        </SheetTitle>
        <SheetDescription className="flex">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={async () => loginWithRedirect()}
              className="flex-1 font-bold bg-orange-500"
            >
              Sign in/ Sign up
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
