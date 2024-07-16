import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <main className="h-screen">
      <Sidebar />
      <div className="ml-0 md:ml-52 lg:ml-56 py-10 px-1">
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
