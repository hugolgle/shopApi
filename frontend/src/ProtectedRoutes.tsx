import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthProvider";
import { ROUTES } from "./components/Routes";
import { ROLES } from "./components/StaticData";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthContext();

  if (loading) return null;

  if (user?.role.name !== ROLES.ADMIN) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
}

export default ProtectedRoute;
