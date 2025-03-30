import { Outlet } from "react-router-dom";
import Header from "../includes/Header";
import { Fragment } from "react/jsx-runtime";

function MainLayout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default MainLayout;
