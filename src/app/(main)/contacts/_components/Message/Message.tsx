"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";

export default function Message() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="bg-[#1E1F25] p-4 md:p-6 lg:p-10 rounded-lg w-full lg:w-[450px]">
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
            className="w-full bg-transparent border-b border-gray-600 focus:border-primary outline-none py-2"
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
            className="w-full bg-transparent border-b border-gray-600 focus:border-primary outline-none py-2"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone"
            className="w-full bg-transparent border-b border-gray-600 focus:border-primary outline-none py-2"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={3}
            className="w-full bg-transparent border-b border-gray-600 focus:border-primary outline-none resize-none py-2"
          ></textarea>
        </div>

        <DynamicActionButton className="w-full" type="submit">
          Send Message
        </DynamicActionButton>
      </form>
    </div>
  );
}
