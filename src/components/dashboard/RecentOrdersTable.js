export default function RecentOrdersTable() {
  const orders = [
    { id: "#ORD-9901", customer: "Alex Mercer", product: "Cyberpunk Techwear Jacket", amount: "$149.00", status: "Completed" },
    { id: "#ORD-9902", customer: "Sarah Connor", product: "Neon Pulse Headset", amount: "$89.50", status: "Processing" },
    { id: "#ORD-9903", customer: "Bruce Wayne", product: "Tactical Smart Watch", amount: "$299.00", status: "Completed" },
    { id: "#ORD-9904", customer: "Diana Prince", product: "Quantum LED Sneakers", amount: "$120.00", status: "Pending" },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
      <h3 className="text-lg font-bold text-white mb-4">Recent Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-gray-300">
          <thead className="text-gray-400 uppercase bg-white/5 border-b border-white/10">
            <tr>
              <th className="py-3 px-4 rounded-l-lg">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4 rounded-r-lg">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 font-mono font-semibold text-cyan-400">{order.id}</td>
                <td className="py-3 px-4">{order.customer}</td>
                <td className="py-3 px-4">{order.product}</td>
                <td className="py-3 px-4 font-semibold text-white">{order.amount}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                      order.status === "Completed"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : order.status === "Processing"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
