import { SiteHeader } from "@/components/ui/SiteHeader";
import { AppSidebar } from "@/components/ui/admin/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function DashboardLayout() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard/commands":
        return "Commandes";
      case "/dashboard/users":
        return "Utilisateurs";
      case "/dashboard/products":
        return "Produits";
      default:
        return "Dashboard";
    }
  };

  const titleHeader = getPageTitle();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader title={titleHeader} />
        <div className="p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
