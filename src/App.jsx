import { Routes, Route, Navigate, useLocation } from "react-router";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import ListaVagas from "./pages/ListaVagas/ListaVagas";
import DetalheVaga from "./pages/DetalheVaga/DetalheVaga";
import ProtectedRoute from "./Components/ProtectedRouter/ProtectedRoute";
import { Login } from "./pages/Login/Login";

import JobForm from "./pages/JobForm/JobForm";
import Layout from "./Components/Layout/Layout";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
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
          <Route path="/vagas" element={<ListaVagas />} />
          <Route path="/vaga/:id" element={<DetalheVaga />} />
        </Route>
      </Routes>
    </div>
  );
}
