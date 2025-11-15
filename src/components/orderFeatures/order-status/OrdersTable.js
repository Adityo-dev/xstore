export default function OrdersTable({ orders, getStatusColor, onSelect }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700 text-left text-nowrap">
            <th className="py-3 px-4">ORDER ID</th>
            <th className="py-3 px-4">DATE</th>
            <th className="py-3 px-4">STATUS</th>
            <th className="py-3 px-4">TOTAL</th>
            <th className="py-3 px-4">ACTION</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-gray-800 hover:bg-[#1a1a1a] transition text-nowrap bg-[#1E2129]"
            >
              <td className="py-4 px-4 font-medium text-gray-200">
                {order.id}
              </td>

              <td className="py-4 px-4 text-gray-400">{order.date}</td>

              <td className="py-4 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </td>

              <td className="py-4 px-4 text-gray-300 font-semibold">
                ${order.total.toFixed(2)}
              </td>

              <td className="py-4 px-4">
                <button
                  onClick={() => onSelect(order)}
                  className="text-[#d8d6d8] hover:underline font-medium cursor-pointer"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
