const locations = [
  {
    id: 1,
    city: "New York",
    addressTitle: "Postal Address - USA",
    address: "PO Box 16122 Collins Street West, Victoria 8007 Australia",
    contactTitle: "Get In Touch",
    phone: "+44 1800 3443 5050 / 5252",
    email: "info@xstoregaming.com",
  },
  {
    id: 2,
    city: "Melbourne",
    addressTitle: "Headquater - Australia",
    address: "180 Flinders Pro Street, Melbourne Victoria, 3000 Australia",
    contactTitle: "Get In Touch",
    phone: "+44 1800 9696 4242 / 4545",
    email: "help@xstoregaming.com",
  },
];

export default function ContactLocations() {
  return (
    <section className="container mx-auto  flex flex-col">
      {locations.map((loc) => (
        <div key={loc?.id} className="space-y-5">
          {/* City Name */}
          <h2 className="text-[30px] font-semibold font-marcellus">
            {loc?.city}
          </h2>

          <div className="flex gap-12">
            {/* Address Section */}
            <div>
              <h3 className="text-[17px] font-semibold font-marcellus">
                {loc?.addressTitle}
              </h3>
              <p className="text-[#AAACB6] mt-2 text-[17px] leading-relaxed">
                {loc?.address}
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-[17px] font-semibold font-marcellus">
                {loc?.contactTitle}
              </h3>
              <p className="text-[#AAACB6] text-[17px] mt-2">{loc?.phone}</p>
              <p className="text-[#776bf8] text-[17px] mt-1 cursor-pointer">
                {loc?.email}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
