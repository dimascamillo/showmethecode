import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Perfil } from "./pages/Perfil";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}
