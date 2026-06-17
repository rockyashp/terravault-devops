import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Shipments from "./pages/Shipments";
import Alerts from "./pages/Alerts";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/inventory" element={<Inventory />} />

      <Route path="/shipments" element={<Shipments />} />

      <Route path="/alerts" element={<Alerts />} />
    </Routes>
  );
}

export default App;