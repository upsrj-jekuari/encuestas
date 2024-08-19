import DashboardRoutes from "../../../routes/dashboard/DashboardRoutes";
import Sidebar from "../../organisms/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <DashboardRoutes />
    </div>
  );
};

export default Dashboard;
