function BillingDetails({ form, errors, handleChange }) {
  return (
    <div className="bg-[#1E2129] p-4 md:p-6 rounded-lg space-y-6 h-fit">
      <h2 className="text-2xl font-semibold text-[#f5f5f5]">Billing Details</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={form.firstName}
            onChange={handleChange}
            className={`bg-[#1a1a1a] border px-4 py-2 rounded-md w-full focus:outline-none ${
              errors.firstName ? "border-red-500" : "border-gray-700"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className={`bg-[#1a1a1a] border px-4 py-2 rounded-md w-full focus:outline-none ${
              errors.lastName ? "border-red-500" : "border-gray-700"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="text"
          name="street"
          placeholder="Street Address *"
          value={form.street}
          onChange={handleChange}
          className={`bg-[#1a1a1a] border px-4 py-2 rounded-md w-full focus:outline-none ${
            errors.street ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.street && (
          <p className="text-red-500 text-sm mt-1">{errors.street}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="city"
          placeholder="City *"
          value={form.city}
          onChange={handleChange}
          className={`bg-[#1a1a1a] border px-4 py-2 rounded-md w-full focus:outline-none ${
            errors.city ? "border-red-500" : "border-gray-700"
          }`}
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone *"
          value={form.phone}
          onChange={handleChange}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          className={`bg-[#1a1a1a] border px-4 py-2 rounded-md w-full focus:outline-none ${
            errors.phone ? "border-red-500" : "border-gray-700"
          }`}
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={handleChange}
        className="bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-md w-full focus:outline-none"
      />

      <textarea
        name="notes"
        placeholder="Order Notes (optional)"
        value={form.notes}
        onChange={handleChange}
        className="bg-[#1a1a1a] border border-gray-700 px-4 py-2 rounded-md w-full focus:outline-none"
      />
    </div>
  );
}

export default BillingDetails;
