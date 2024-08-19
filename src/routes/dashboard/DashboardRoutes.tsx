import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "../../components/pages/Dashboard/DashboardPage";
import NewFormPage from "../../components/pages/New/NewFormPage";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="list" />} />
      <Route path="/list/*" element={<DashboardPage />} />
        <Route path="/new" element={<Navigate to="1" />} />
      <Route path="/new/:id" element={<NewFormPage />} />
      <Route path="/stats" />
    </Routes>
  );
};

export default DashboardRoutes;
