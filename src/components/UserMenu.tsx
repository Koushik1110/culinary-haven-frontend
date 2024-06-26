import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const UserMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-bold hover:text-orange-500 flex items-center gap-3">
        <Avatar>
          <AvatarImage src={user?.picture} />
          <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
        <span>{user?.name}</span> <br />
        <span>{user?.email}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/user-profile">User Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/manage-restaurant">Manage Restaurant</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/order-status">Order Status</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="font-bold bg-orange-500"
          >
            Sign out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;