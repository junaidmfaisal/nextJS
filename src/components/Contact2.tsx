"use client";

import { useState } from "react";

export default function Contact2() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    needs: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) newErrors.name = "Full name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be 10-15 digits.";
    }

    if (!form.needs.trim()) newErrors.needs = "Please select your needs.";

    if (!form.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", form);
      alert("Your request has been submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        needs: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Let&apos;s Collaborate with Us!</h2>
        <p className="text-gray-600 mb-10">
          We are always ready to help you at any time. Please fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">Address Business</h4>
              <p>48/1326-D, Rosa mystica building</p>
              <p>P.C road, Vyttila P.O kochi-682019</p>
            </div>
            <div>
              <h4 className="font-semibold">Email Address</h4>
              <p> homorainteriors@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold">Contact With Us</h4>
              <p>Call Consulting: +91 9048400797</p>
            </div>
            <div>
              <h4 className="font-semibold">Working Time</h4>
              <p>Mon - Sat: 8.00am - 6.00pm</p>
              <p>Holiday : Closed</p>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={handleChange}
                  className={`border rounded-lg px-4 py-2 w-full ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={handleChange}
                  className={`border rounded-lg px-4 py-2 w-full ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={handleChange}
                  className={`border rounded-lg px-4 py-2 w-full ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <select
                  name="needs"
                  value={form.needs}
                  onChange={handleChange}
                  className={`border rounded-lg px-4 py-2 w-full ${
                    errors.needs ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Your Needs *</option>
                  <option value="consulting">Consulting</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                </select>
                {errors.needs && <p className="text-red-500 text-sm">{errors.needs}</p>}
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message *"
                value={form.message}
                onChange={handleChange}
                className={`border rounded-lg px-4 py-2 w-full min-h-[120px] ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
            >
              Submit Request <span>✈</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
