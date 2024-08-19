import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login/Login";
import Encuesta from "../components/pages/Encuesta/Encuesta";
import Dashboard from "../components/layouts/Dashboard/Dashboard";

const IndexRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form/:id" element={<Encuesta />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoutes;
