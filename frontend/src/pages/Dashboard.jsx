import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <MainLayout>
      {/* Page Heading */}
      <h1 className="text-4xl font-bold mb-8">
        TerraVault Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Inventory"
          value="12,450 Tons"
          subtitle="Available stock"
          color="blue"
        />

        <Card
          title="Shipments"
          value="148"
          subtitle="Currently active"
          color="green"
        />

        <Card
          title="Active Mines"
          value="24"
          subtitle="Operational sites"
          color="orange"
        />

        <Card
          title="Alerts"
          value="3"
          subtitle="Require attention"
          color="red"
        />
      </div>

      {/* Recent Shipments Table */}
      <div className="bg-white rounded-xl shadow-lg mt-10 p-6">
        <h2 className="text-2xl font-semibold mb-6">
          Recent Shipments
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Shipment</th>
              <th className="text-left py-3">Mineral</th>
              <th className="text-left py-3">Destination</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-4">SH-101</td>
              <td>Lithium</td>
              <td>Germany</td>
              <td className="text-blue-600 font-semibold">
                In Transit
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-4">SH-102</td>
              <td>Nickel</td>
              <td>Japan</td>
              <td className="text-green-600 font-semibold">
                Delivered
              </td>
            </tr>

            <tr>
              <td className="py-4">SH-103</td>
              <td>Copper</td>
              <td>USA</td>
              <td className="text-red-600 font-semibold">
                Delayed
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}