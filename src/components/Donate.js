/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

import ncdlgo from "../images/ncdlgo.png";
import ncdo4 from "../images/ncdo4.jpg";
import ncdo5 from "../images/ncdo5.jpeg";
import ncdo7 from "../images/ncdo7.jpeg";

export default function Donate() {
  useLocation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
  });

  const [success, setSuccess] = useState(false);

  const presetAmounts = [100, 500, 1000, 2000];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount || !form.phone) return;
    setSuccess(true);
  };

  return (
    <div className="bg-[#F2ECE8] min-h-screen">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-[#1D347A] text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

          <div className="flex items-center gap-2">
            <img src={ncdlgo} className="w-12" />
            <span className="text-sm font-bold">
              NCDO<br />COMMUNITY DEV
            </span>
          </div>

          <div className="hidden md:flex gap-6 text-sm">
            <Link to="/">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/#programs">Programs</Link>
            <Link to="/#contact">Contact</Link>
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="pt-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1D347A]">
          Support Our Mission
        </h1>

        <p className="text-gray-600 mt-2">
          Send your donation via M-Pesa Paybill
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-8 max-w-5xl mx-auto">
          {[ncdo4, ncdo5, ncdo7].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-44 w-full object-cover rounded-xl shadow"
            />
          ))}
        </div>
      </section>

      {/* ================= PAYBILL INFO ================= */}
      <section className="max-w-xl mx-auto bg-white mt-10 p-6 rounded-xl shadow text-center">

        <h2 className="text-xl font-bold text-[#1D347A] mb-4">
          M-Pesa Paybill Details
        </h2>

        <div className="bg-gray-100 p-4 rounded-lg text-left space-y-2">
          <p><strong>Paybill Number:</strong> ****</p>
          <p><strong>Account Name:</strong> NCDO Donations</p>
          <p><strong>Use:</strong> Your Name as Reference</p>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Send money using M-Pesa → Lipa na M-Pesa → Paybill
        </p>
      </section>

      {/* ================= FORM ================= */}
      <section className="max-w-xl mx-auto bg-white mt-6 p-6 rounded-xl shadow">

        <h2 className="text-lg font-bold text-center text-[#1D347A] mb-4">
          Donation Details (Optional)
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-4">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => setForm({ ...form, amount: amt })}
              className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-200"
            >
              KES {amt}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border rounded"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            name="amount"
            type="number"
            placeholder="Amount Sent (KES)"
            className="w-full p-3 border rounded"
            value={form.amount}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-[#1D347A] font-bold py-3 rounded"
          >
            I Have Sent Donation
          </button>
        </form>
      </section>

      {/* ================= SUCCESS ================= */}
      {success && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center">
            <h2 className="text-green-600 text-xl font-bold">
              Thank You 🙏
            </h2>
            <p className="mt-2">
              Your donation has been recorded. God bless you!
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-4 bg-yellow-400 px-5 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-gray-300 mt-12 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div>
            <img src={ncdlgo} className="w-20 mb-3" />
            <p className="text-sm">
              NCDO empowers communities in Kenya through support & outreach.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Programs</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">Connect</h3>
            <div className="flex gap-3">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaWhatsapp />
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}