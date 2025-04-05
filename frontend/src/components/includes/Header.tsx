import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Search, ShoppingCart, CircleUser } from "lucide-react";

function Header() {
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
                <Link to={"/boutique"}>
                  <Button variant="ghost">Dernier produits</Button>
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
              <NavigationMenuItem>
                <Link to={"/login"}>
                  <Button variant="ghost">
                    <CircleUser />
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
