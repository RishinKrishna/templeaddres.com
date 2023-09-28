import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NonAdminLayout = ({ navbar = { containerClassName: "" }, children }) => {
  return (
    <div>
      <Navbar containerClassName={navbar.containerClassName} />
      <div className="lg:my-[100px] lg:px-12">{children}</div>
      <Footer />
    </div>
  );
};

export default NonAdminLayout;
