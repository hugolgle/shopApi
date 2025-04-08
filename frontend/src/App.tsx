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

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <div>Not Found</div>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/store", element: <Store /> },
        { path: "/login", element: <Login /> },
        { path: "/cart", element: <Cart /> },
        { path: "/product/:id", element: <Product /> },
        { path: "/payment/:sessionId/success", element: <Succes /> },
        { path: "/payment/:sessionId/cancel", element: <Cancel /> },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [{ path: "/test", element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
