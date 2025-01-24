import Header from "@/components/common/header";
import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import FooterSocket from "../footerSocket/FooterSocket";

const DashboardLayout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Conditionally render footer based on page */}
      <footer>
        <FooterSocket />
      </footer>
    </Fragment>
  );
};

export default DashboardLayout;
