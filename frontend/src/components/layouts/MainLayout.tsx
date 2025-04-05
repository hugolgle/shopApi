import { Outlet } from "react-router-dom";
import Header from "../includes/Header";
import { Fragment } from "react/jsx-runtime";
import Footer from "../includes/Footer";

function MainLayout() {
  return (
    <Fragment>
      <main className="min-h-screen">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
