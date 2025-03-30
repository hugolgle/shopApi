import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <div>Not Found</div>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
