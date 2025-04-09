import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Search, CircleUser, Menu, X } from "lucide-react";
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
import Cart from "@/components/ui/cart";
import { useAuthContext } from "@/context/AuthProvider";
import { ROUTES } from "../Routes";
import { ROLES } from "../StaticData";

function Header() {
  const { isAuthenticated, user, logout } = useAuthContext();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const redirect = useNavigate();
  const isAdmin = user?.role.name === ROLES.ADMIN;

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
          <Link to={ROUTES.HOME} className="text-2xl font-bold font-boldonse">
            Randoo
          </Link>
          {/* MENU RESPONSIVE  */}
          <div className="flex md:hidden">
            <Button variant="ghost">
              <Search />
            </Button>
            <Cart />
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
              to={ROUTES.STORE}
              onClick={() => setOpenMenu(false)}
              className="text-lg"
            >
              Boutique
            </Link>
            <Link
              to={"#"}
              onClick={() => setOpenMenu(false)}
              className="text-lg"
            >
              Collections
            </Link>
            <Link
              to={"#"}
              onClick={() => setOpenMenu(false)}
              className="text-lg"
            >
              Notre histoire
            </Link>
            {isAdmin && (
              <Link
                to={ROUTES.ADMIN.HOME}
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
              to={ROUTES.DASHBOARD_CUSTOMER.COMMANDS}
              onClick={() => setOpenMenu(false)}
              className="text-lg"
            >
              Mes commandes
            </Link>
            <p
              onClick={() => {
                setOpenMenu(false);
                logout();
                redirect(ROUTES.HOME);
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
                <Link to={ROUTES.STORE}>
                  <Button variant="ghost">Boutique</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to={"#"}>
                  <Button variant="ghost">Collections</Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to={"#"}>
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
                <Cart />
              </NavigationMenuItem>
              {!isAuthenticated ? (
                <NavigationMenuItem>
                  <Link to={ROUTES.LOGIN}>
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
                          <Link to={ROUTES.ADMIN.HOME}>Dashboard</Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Link to={ROUTES.DASHBOARD_CUSTOMER.COMMANDS}>
                          Mes commandes
                        </Link>
                      </DropdownMenuItem>
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
