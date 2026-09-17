import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentOrdersTable from "@/components/dashboard/RecentOrdersTable";
import { FaShoppingBag, FaUsers, FaDollarSign, FaChartLine } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader title="System Overview & Analytics" />
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Revenue"
            value="$42,850.00"
            change="+14.2%"
            icon={FaDollarSign}
          />
          <StatsCard
            title="Total Orders"
            value="1,248"
            change="+8.5%"
            icon={FaShoppingBag}
          />
          <StatsCard
            title="Active Customers"
            value="3,892"
            change="+22.4%"
            icon={FaUsers}
          />
          <StatsCard
            title="Conversion Rate"
            value="4.65%"
            change="+1.2%"
            icon={FaChartLine}
          />
        </div>

        <RecentOrdersTable />
      </main>
    </div>
  );
}
