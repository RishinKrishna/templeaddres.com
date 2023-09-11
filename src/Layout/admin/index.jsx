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
      <div className="flex flex-1 flex-col justify-between">
        {header.state && <Header />}
        <div className="flex-1 p-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
