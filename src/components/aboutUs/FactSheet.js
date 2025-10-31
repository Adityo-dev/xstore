import SectionHeader from "../SectionHeader";

const statsData = [
  {
    id: 1,
    icon: "👤",
    value: "750K+",
    title: "Users Worldwide",
    description:
      "There are many variations of passages of lorem ipsum available majority have suffered alteration in humor sometimes by accident.",
    large: true,
  },
  {
    id: 2,
    icon: "🌐",
    value: "4.6M",
    title: "Social Media Reach",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
  },
  {
    id: 3,
    icon: "🎮",
    value: "2,550+",
    title: "Extensive Games",
    description:
      "Many desktop publishing package and page editor the default model.",
  },
  {
    id: 4,
    icon: "😊",
    value: "97%",
    title: "Customer Satisfaction",
    description:
      "Various versions have evolved over the years, sometimes by accident.",
  },
  {
    id: 5,
    icon: "🛍️",
    value: "1.52K",
    title: "Digital Items Sold",
    description:
      "This book is treatise on the theory of very popular during the Renaissance.",
  },
];

function FactSheet() {
  return (
    <div className="bg-[#23262F] py-6 lg:py-12 xl:py-20 px-4">
      <SectionHeader title={"Our Fact Sheet in Numbers"} />

      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {statsData.map((item, index) => (
          <div
            key={item.id}
            className={`bg-[#141416] p-6 rounded-lg flex flex-col justify-center ${
              item.large
                ? "sm:col-span-1 md:col-span-2 xl:col-span-2 xl:row-span-2"
                : ""
            }`}
          >
            <div className="text-4xl mb-3 text-purple-400">{item.icon}</div>

            <h2
              className={`${
                item.large
                  ? "lg:text-[120px] md:text-[80px] text-[50px] font-marcellus mb-3"
                  : "md:text-[35px] text-[30px] font-marcellus mb-2"
              } text-white`}
            >
              {item.value}
            </h2>

            <h3
              className={`${
                item.large
                  ? "lg:text-[30px] md:text-[24px] text-[18px] font-semibold font-marcellus mb-4"
                  : "text-[17px] font-marcellus mb-2"
              } text-white`}
            >
              {item.title}
            </h3>

            <p className="text-[#8E919F] sm:text-[17px] font-medium leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FactSheet;
