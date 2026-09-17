import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export const metadata = {
  title: "Dashboard - xstore Hub",
  description: "Management portal for xstore",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#07090e]">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
