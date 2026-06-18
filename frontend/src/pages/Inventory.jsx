import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getInventory } from "../services/inventoryService";

export default function Inventory() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    async function loadInventory() {
      try {
        const data = await getInventory();
        setInventory(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadInventory();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-8">
        Inventory Management
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Mineral</th>
              <th className="text-left py-3">Quantity</th>
              <th className="text-left py-3">Location</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="py-4">{item.mineral}</td>
                <td>{item.quantity}</td>
                <td>{item.location}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}