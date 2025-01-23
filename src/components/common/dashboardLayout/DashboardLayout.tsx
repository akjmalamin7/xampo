import Header from "@/components/common/header";
import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const DashboardLayout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Conditionally render footer based on page */}
      <footer>
        {/* Render different footer components here */}
      </footer>
    </Fragment>
  );
};

export default DashboardLayout;
