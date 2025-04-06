import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Search, ShoppingCart, CircleUser } from "lucide-react";
import { useAuth } from "@/hooks/useAuth.hook";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const isAdmin = user?.role.name === "ADMIN";

  return (
    <header className="w-full h-[70px] flex items-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="text-2xl font-bold font-boldonse">
            Randoo
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to={"/store"}>
                  <Button variant="ghost">Boutique</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to={"/a-propos"}>
                  <Button variant="ghost">Collections</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to={"/a-propos"}>
                  <Button variant="ghost">Notre histoire</Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Button variant="ghost">
                  <Search />
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">
                  <ShoppingCart />
                </Button>
              </NavigationMenuItem>
              {!isAuthenticated ? (
                <NavigationMenuItem>
                  <Link to={"/login"}>
                    <Button variant="ghost">
                      <CircleUser />
                    </Button>
                  </Link>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>
                        <p className="text-md font-semibold capitalize">
                          {user?.firstName} {user?.lastName}
                        </p>
                        <p className="text-xs font-normal"> {user?.email}</p>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />

                      {isAdmin && (
                        <DropdownMenuItem asChild>
                          <Link to={"/dashboard"}>Dashboard</Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                      <DropdownMenuItem>Mes commandes</DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={logout}
                        className="text-red-500 hover:text-red-400"
                      >
                        Déconnexion
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
