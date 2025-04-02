import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import DashboardLayout from "./components/layouts/DashboardLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <div>Not Found</div>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/boutique", element: <Home /> },
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
