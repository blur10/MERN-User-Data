import Navbar from "../Navbar";

import { Outlet } from "react-router-dom";
import "./styles.css";

const PageContainer = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default PageContainer;
