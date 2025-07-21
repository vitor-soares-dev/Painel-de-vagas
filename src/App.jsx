import { Routes, Route, Navigate, useLocation } from "react-router";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import ListaVagas from "./pages/ListaVagas/ListaVagas";
import DetalheVaga from "./pages/DetalheVaga/DetalheVaga";
import ProtectedRoute from "./Components/ProtectedRouter/ProtectedRoute";
import { Login } from "./pages/Login/Login";
import Header from "./Components/Header/Header";
import JobForm from "./pages/JobForm/JobForm";

export default function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/login"];

  return (
    <div>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
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
      </Routes>
    </div>
  );
}
