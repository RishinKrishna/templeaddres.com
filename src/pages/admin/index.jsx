import Summary from "@/components/admin/Summary";
import Activites from "@/components/admin/Activites";
import Layout from "@/Layout/admin";

const Dashboard = () => {
  return (
    <div className="flex">
      <Summary />
    </div>
  );
};

Dashboard.getLayout = (page) => <Layout>{page}</Layout>;
export default Dashboard;
