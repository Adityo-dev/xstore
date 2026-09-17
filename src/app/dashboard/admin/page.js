import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { FaBoxes, FaUserShield, FaSlidersH } from "react-icons/fa";

export default function AdminDashboardPage() {
  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader title="Admin Management Portal" />
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <FaBoxes className="text-3xl text-cyan-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Product Catalog Control</h3>
            <p className="text-xs text-gray-400 mb-4">Manage products, inventory levels, pricing, and category taxonomy.</p>
            <button className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors">
              Manage Products
            </button>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <FaUserShield className="text-3xl text-purple-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Role Permissions</h3>
            <p className="text-xs text-gray-400 mb-4">Configure store manager roles, staff access levels, and security logs.</p>
            <button className="px-4 py-2 text-xs font-semibold rounded-lg bg-purple-500 text-white hover:bg-purple-400 transition-colors">
              Configure Access
            </button>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <FaSlidersH className="text-3xl text-emerald-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Store Settings</h3>
            <p className="text-xs text-gray-400 mb-4">Update payment gateways, shipping providers, and currency rules.</p>
            <button className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 transition-colors">
              Store Config
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
