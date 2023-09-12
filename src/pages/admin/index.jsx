// import Header from "@/components/admin/Header";
// import Sidebar from "@/components/admin/Sidebar";
import Counts from "@/components/admin/Counts";
import Activites from "@/components/admin/Counts/Activites";
import Layout from "@/Layout/admin";

const Dashboard = () => {
  return (
    <div className="flex">
      <Counts />
      <Activites />
    </div>
  );
};

Dashboard.getLayout = (page) => <Layout>{page}</Layout>;
export default Dashboard;
