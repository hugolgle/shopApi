import Header from "../includes/Header";
import { Fragment } from "react/jsx-runtime";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}

export default MainLayout;
