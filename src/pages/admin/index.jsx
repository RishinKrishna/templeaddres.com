import Header from "@/components/admin/Sidebar/Header";
import Sidebar from "@/components/admin/Sidebar";
import Counts from "@/components/admin/Counts";
import Layout from "@/Layout/admin";

const Dashboard = () => {
  return <Counts />;
};

Dashboard.getLayout = (page) => <Layout>{page}</Layout>;
export default Dashboard;
