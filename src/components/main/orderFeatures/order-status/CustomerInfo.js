export default function CustomerInfo({ customer }) {
  return (
    <div className="bg-[#1E2129] p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-3 text-white">
        Customer Information
      </h3>

      <div className="grid md:grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-400">Name</p>
          <p className="font-medium">
            {customer.firstName} {customer.lastName}
          </p>
        </div>

        <div>
          <p className="text-gray-400">Phone</p>
          <p className="font-medium">{customer.phone || "N/A"}</p>
        </div>

        <div>
          <p className="text-gray-400">Email</p>
          <p className="font-medium">{customer.email || "N/A"}</p>
        </div>

        <div>
          <p className="text-gray-400">Address</p>
          <p className="font-medium">
            {customer.street}, {customer.city}
          </p>
        </div>

        {customer.notes && (
          <div className="md:col-span-2">
            <p className="text-gray-400">Notes</p>
            <p className="font-medium">{customer.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
