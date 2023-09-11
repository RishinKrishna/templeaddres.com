import Header from "@/components/admin/Sidebar/Header";
import Sidebar from '@/components/admin/Sidebar';
import Counts from "@/components/admin/Sidebar/Counts";

const Dashboard = () => {
  return (
    <div className='flex bg-[#faf7ed] h-screen'>
      <Sidebar />
      <div className="flex flex-1 flex-col justify-between">
        <Header />
        <div className="flex-1 p-5">
        <Counts />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
