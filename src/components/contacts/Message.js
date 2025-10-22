"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="bg-[#1E1F25] p-10 rounded-lg w-[450px]">
      <h2 className="text-2xl font-semibold mb-6 font-marcellus">
        How can help you?
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name *"
            required
            className="w-full bg-transparent border-b border-gray-600 focus:border-[#776BF8] outline-none py-2"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email address *"
            required
            className="w-full bg-transparent border-b border-gray-600 focus:border-[#776BF8] outline-none py-2"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone"
            className="w-full bg-transparent border-b border-gray-600 focus:border-[#776BF8] outline-none py-2"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="3"
            className="w-full bg-transparent border-b border-gray-600 focus:border-[#776BF8] outline-none resize-none py-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" w-full bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-8 py-2 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
