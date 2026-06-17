import {
  LayoutDashboard,
  Package,
  Truck,
  TriangleAlert,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        TerraVault
      </div>

      <nav className="p-4">
        <ul className="space-y-2">

          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/inventory"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
            >
              <Package size={20} />
              Inventory
            </Link>
          </li>

          <li>
            <Link
              to="/shipments"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
            >
              <Truck size={20} />
              Shipments
            </Link>
          </li>

          <li>
            <Link
              to="/alerts"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
            >
              <TriangleAlert size={20} />
              Alerts
            </Link>
          </li>

        </ul>
      </nav>
    </aside>
  );
}