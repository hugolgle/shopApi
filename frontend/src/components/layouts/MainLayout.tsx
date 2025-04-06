import { Outlet } from "react-router-dom";
import Header from "../includes/Header";
import { Fragment } from "react/jsx-runtime";
import Footer from "../includes/Footer";
import ButtonOnTop from "../includes/ButtonOnTop";

function MainLayout() {
  return (
    <Fragment>
      <main className="min-h-screen">
        <Header />
        <div className="pt-[70px]">
          <Outlet />
        </div>
      </main>
      <ButtonOnTop />
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
