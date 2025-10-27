"use client";

import { useState } from "react";

import { FiPlus } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi2";

const faqs = [
  {
    id: 1,
    question: "What is the contradiction between New and Pre-owned games?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem qui voluptas aspernatur consequuntur magni.",
  },
  {
    id: 2,
    question: "How do I update my game library?",
    answer:
      "You can update your game library by going to your profile and selecting 'Update Library'. Follow the instructions to add or remove games.",
  },
  {
    id: 3,
    question: "Can I return a pre-owned game?",
    answer:
      "Yes, pre-owned games can be returned within 14 days of purchase if the package is intact and the disc is not damaged.",
  },
  {
    id: 4,
    question: "Are there discounts for bundled purchases?",
    answer:
      "Yes, we offer discounts for bundled purchases. Check the promotions section to see current bundle deals.",
  },
];

function Faqs() {
  const [openFaqId, setOpenFaqId] = useState(1);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="container mx-auto pt-44 mb-24 text-center space-y-12">
      <div>
        <h2 className="text-[50px] font-semibold font-marcellus">
          Answers & Questions
        </h2>
        <p className="text-[20px] font-semibold mt-1">
          From basic inquiries to intricate details, we’ve collated the most
          common queries from our user base.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="max-w-6xl mx-auto bg-[#1E2129] rounded-md text-start overflow-hidden"
          >
            <button
              className="w-full text-[24px] font-semibold p-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(faq.id)}
            >
              <span>{faq.question}</span>
              <span
                className={`text-xl transition-transform duration-500 ${
                  openFaqId === faq.id ? "rotate-180" : ""
                }`}
              >
                {openFaqId === faq.id ? <HiOutlineMinus /> : <FiPlus />}
              </span>
            </button>

            {openFaqId === faq.id && (
              <div
                className={`px-6 pb-6 text-[18px] text-[#8E919F] overflow-hidden ${
                  openFaqId === faq.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faqs;
