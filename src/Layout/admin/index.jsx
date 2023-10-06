import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import router from "next/router";
const Layout = ({
  children,
  sidebar = { state: true },
  header = { state: true },
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    if (!token || (token === "" && token == null)) {
      router.push("/login");
    } else setIsLoggedIn(true);
  }, []);

  if (isLoggedIn) {
    return (
      <div className="flex bg-[#faf7ed] h-screen">
        {sidebar.state && <Sidebar />}
        <div className="w-full h-full overflow-hidden">
          {header.state && <Header />}
          <div className="lg:p-6 lg:pb-52 w-full h-full overflow-auto">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return <div>Loading</div>;
};

export default Layout;
