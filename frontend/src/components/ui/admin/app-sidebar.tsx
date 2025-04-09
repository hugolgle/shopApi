import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { NavUser } from "./nav-user";
import { useAuthContext } from "@/context/AuthProvider";
import { UserProfile } from "@/interface/userProfile.interface";
import { ROUTES } from "@/components/Routes";

export function AppSidebar() {
  const { user, logout } = useAuthContext();
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to={ROUTES.ADMIN.HOME}>
                <p className="text-base font-boldonse">
                  Randoo{" "}
                  <span className="font-boldonse text-[10px]">Admin</span>{" "}
                </p>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <Link to="commands">
          <Button variant="secondary" className="w-full">
            Commandes
          </Button>{" "}
        </Link>
        <Link to="users">
          <Button variant="secondary" className="w-full">
            Utilisateurs
          </Button>{" "}
        </Link>
        <Link to="products">
          <Button variant="secondary" className="w-full">
            Produits
          </Button>
        </Link>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user as UserProfile} logout={logout} />
      </SidebarFooter>
    </Sidebar>
  );
}
