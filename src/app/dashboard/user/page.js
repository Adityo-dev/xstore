import DashboardHeader from "@/components/dashboard/DashboardHeader";
import RecentOrdersTable from "@/components/dashboard/RecentOrdersTable";
import { FaShoppingBag, FaHeart, FaMapMarkerAlt } from "react-icons/fa";

export default function UserDashboardPage() {
  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader title="User Account Center" />
      <main className="p-6 space-y-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              AM
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Alex Mercer</h2>
              <p className="text-xs text-gray-400">alex.mercer@example.com • Premium Member</p>
            </div>
          </div>
          <button className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
            <FaShoppingBag className="text-2xl text-cyan-400" />
            <div>
              <h4 className="text-lg font-bold text-white">12 Orders</h4>
              <p className="text-xs text-gray-400">Lifetime purchases</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
            <FaHeart className="text-2xl text-rose-400" />
            <div>
              <h4 className="text-lg font-bold text-white">8 Saved</h4>
              <p className="text-xs text-gray-400">Wishlist items</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
            <FaMapMarkerAlt className="text-2xl text-emerald-400" />
            <div>
              <h4 className="text-lg font-bold text-white">2 Addresses</h4>
              <p className="text-xs text-gray-400">Primary delivery set</p>
            </div>
          </div>
        </div>

        <RecentOrdersTable />
      </main>
    </div>
  );
}
