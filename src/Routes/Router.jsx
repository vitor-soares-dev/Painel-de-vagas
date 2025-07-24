import { Routes, Route, Navigate, Outlet } from "react-router";

// Pages
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import ListaVagas from "../pages/ListaVagas/ListaVagas";
import DetalheVaga from "../pages/DetalheVaga/DetalheVaga";
import JobForm from "../pages/JobForm/JobForm";
import { Login } from "../pages/Login/Login";

// Layout and Protection
import Layout from "../Components/Layout/Layout";
import ProtectedRoute from "../Components/ProtectedRouter/ProtectedRoute";

// Agrupador para rotas protegidas
const ProtectedLayout = () => (
  <ProtectedRoute>
    <Outlet />
  </ProtectedRoute>
);

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rotas que USAM o Layout (com Header) */}
      <Route element={<Layout />}>
        <Route path="/vagas" element={<ListaVagas />} />
        <Route path="/vaga/:id" element={<DetalheVaga />} />

        {/* Agrupando rotas protegidas que também usam o Layout */}
        <Route element={<ProtectedLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/vagas/nova" element={<JobForm />} />
          <Route path="/vagas/editar/:id" element={<JobForm />} />
        </Route>
      </Route>

      {/* Rotas que NÃO USAM o Layout (sem Header) */}
      <Route path="/login" element={<Login />} />

      {/* Redirecionamento da rota raiz para /login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<h1>Página Não Encontrada</h1>} />
    </Routes>
  );
}
