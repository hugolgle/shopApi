import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <Fragment>
      <p>Dashboard layout</p>
      <Outlet />
    </Fragment>
  );
}

export default DashboardLayout;
