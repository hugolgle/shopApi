import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";

// PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Succes from "./pages/Payment/Succes";
import Cancel from "./pages/Payment/Cancel";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import Commands from "./pages/admin/Commands";
import Users from "./pages/admin/Users";
import Products from "./pages/admin/Products";
import ProtectedRoute from "./ProtectedRoutes";
import { ROUTES } from "./components/Routes";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <div>Not Found</div>,
      children: [
        { path: ROUTES.HOME, element: <Home /> },
        { path: ROUTES.STORE, element: <Store /> },
        { path: ROUTES.LOGIN, element: <Login /> },
        { path: ROUTES.CART, element: <Cart /> },
        { path: ROUTES.PRODUCT_ID, element: <Product /> },
        { path: ROUTES.PAYMENT.SUCCESS, element: <Succes /> },
        { path: ROUTES.PAYMENT.CANCEL, element: <Cancel /> },
      ],
    },
    {
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      path: ROUTES.ADMIN.HOME,
      errorElement: <div>Not Found</div>,
      children: [
        { path: ROUTES.ADMIN.HOME, element: <DashboardAdmin /> },
        { path: ROUTES.ADMIN.COMMANDS, element: <Commands /> },
        { path: ROUTES.ADMIN.USERS, element: <Users /> },
        { path: ROUTES.ADMIN.PRODUCTS, element: <Products /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
