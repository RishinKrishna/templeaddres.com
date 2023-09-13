import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({
  children,
  sidebar = { state: true },
  header = { state: true },
}) => {
  return (
    <div className="flex bg-[#faf7ed] h-screen">
      {sidebar.state && <Sidebar />}
      <div className="w-full h-full overflow-hidden">
        {header.state && <Header />}
        <div className=" p-5 pb-52 w-full h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
