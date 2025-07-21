import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import JobForm from "../pages/JobForm/JobForm";
import ProtectedRoute from "../Components/ProtectedRouter/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/vagas/nova"
        element={
          <ProtectedRoute>
            <JobForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vagas/editar/:id"
        element={
          <ProtectedRoute>
            <JobForm />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
