import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Search, ShoppingCart, CircleUser, Menu, X } from "lucide-react";
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
import { useEffect, useState } from "react";

function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const redirect = useNavigate();
  const isAdmin = user?.role.name === "ADMIN";

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header?.classList.add("bg-white", "shadow-md");
      } else {
        header?.classList.remove("bg-white", "shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full h-[70px] flex items-center transition-colors duration-300 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4">
          <Link to={"/"} className="text-2xl font-bold font-boldonse">
            Randoo
          </Link>
          {/* MENU RESPONSIVE  */}
          <div className="flex md:hidden">
            <Button variant="ghost">
              <Search />
            </Button>
            <Button variant="ghost">
              <ShoppingCart />
            </Button>
            <Button variant="ghost" onClick={() => setOpenMenu(true)}>
              <Menu />
            </Button>
          </div>

          <div
            className={`fixed flex flex-col justify-center items-center top-0 left-0 w-screen h-screen bg-white z-50 transition-transform duration-300 ${
              openMenu ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <Button
              variant="ghost"
              onClick={() => setOpenMenu(false)}
              className="flex md:hidden top-0 right-0 absolute"
            >
              <X />
            </Button>
            <Link
              to={"/store"}
              onClick={() => setOpenMenu(false)}
              className="text-lg"
            >
              Boutique
            </Link>
            <Link
              to={"/a-propos"}
              onClick={() => setOpenMenu(false)}
              className="text-lg"
            >
              Collections
            </Link>
            <Link
              to={"/a-propos"}
              onClick={() => setOpenMenu(false)}
              className="text-lg"
            >
              Notre histoire
            </Link>
            {isAdmin && (
              <Link
                to={"/dashboard"}
                onClick={() => setOpenMenu(false)}
                className="text-lg"
              >
                Dashboard
              </Link>
            )}
            <Link
              to={"#"}
              onClick={() => setOpenMenu(false)}
              className="text-lg"
            >
              Mon compte
            </Link>
            <Link
              to={"#"}
              onClick={() => setOpenMenu(false)}
              className="text-lg"
            >
              Mes commandes
            </Link>
            <p
              onClick={() => {
                setOpenMenu(false);
                logout();
                redirect("/");
              }}
              className="text-lg"
            >
              Déconnexion
            </p>
          </div>

          {/* MENU DESKTOP */}

          <NavigationMenu className="hidden md:flex">
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

          <NavigationMenu className="hidden md:flex">
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
