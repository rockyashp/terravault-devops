import { Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow flex justify-between items-center px-8 h-16">
      <h1 className="text-xl font-bold">
        TerraVault Dashboard
      </h1>

      <div className="flex items-center gap-6">
        <Bell size={22} />
        <UserCircle size={30} />
      </div>
    </header>
  );
}