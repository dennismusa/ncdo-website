/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";   // ✅ useLocation imported
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

import ncdo4 from "../images/ncdo4.jpg";
import ncdo5 from "../images/ncdo5.jpeg";
import ncdo7 from "../images/ncdo7.jpeg";
import ncdolgo from "../images/ncdolgo.jpg";

export default function Donate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", amount: "", method: "" });

  const { pathname } = useLocation(); // ✅ fix: now we can check current path

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  // ✅ Flutterwave config (unchanged)
  const config = {
    public_key: "FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx-X", 
    tx_ref: Date.now(),
    amount: form.amount || 0,
    currency: "KES",
    payment_options: "card,mpesa",
    customer: {
      email: form.email,
      phonenumber: "",
      name: form.name,
    },
    customizations: {
      title: "Noomayianat Community Development",
      description: "Donation Support",
      logo: ncdolgo,
    },
  };

  const fwConfig = {
    ...config,
    text: "Donate Now",
    callback: (response) => {
      console.log(response);
      closePaymentModal();
      alert("Thank you for your donation!");
    },
    onClose: () => {},
  };

  return (
    <div className="font-sans">
      {/* ✅ Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#1D347A] shadow-md px-4 sm:px-6 py-3 text-white z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={ncdolgo} alt="NCDO Logo" className="w-16 h-10 object-contain" />
            <span className="text-xs sm:text-sm md:text-base font-bold leading-tight">
              NOOMAYIANAT <br /> Community Development
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 font-semibold">
            <li><Link to="/" className="hover:text-[#F2ECE8]">Home</Link></li>
            <li><a href="#about" className="hover:text-[#F2ECE8]">Who We Are</a></li>
            <li><a href="#programs" className="hover:text-[#F2ECE8]">Programs</a></li>
            <li><a href="#stories" className="hover:text-[#F2ECE8]">Impact</a></li>
            <li><a href="#contact" className="hover:text-[#F2ECE8]">Contact Us</a></li>
          </ul>

          {/* ✅ Donate Button hidden if already on /donate */}
          {pathname !== "/donate" && (
            <Link
              to="/donate"
              className="hidden md:inline-block bg-[#7382AD] text-white px-3 py-1.5 rounded-md font-bold text-sm hover:bg-[#F2ECE8] hover:text-[#1D347A] transition"
            >
              Donate
            </Link>
          )}

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1D347A] flex flex-col items-center py-4 space-y-3 mt-2 rounded-lg shadow-lg">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#F2ECE8]">Home</Link>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#F2ECE8]">Who We Are</a>
            <a href="#programs" onClick={() => setMenuOpen(false)} className="hover:text-[#F2ECE8]">Programs</a>
            <a href="#stories" onClick={() => setMenuOpen(false)} className="hover:text-[#F2ECE8]">Impact</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#F2ECE8]">Contact Us</a>

            {/* ✅ Donate hidden on donate page */}
            {pathname !== "/donate" && (
              <Link
                to="/donate"
                onClick={() => setMenuOpen(false)}
                className="bg-[#7382AD] text-white px-4 py-2 rounded-md font-bold hover:bg-[#F2ECE8] hover:text-[#1D347A] transition"
              >
                Donate Now
              </Link>
            )}
          </div>
        )}
      </nav>


      {/* ✅ Hero */}
      <section className="relative text-white w-full h-[90vh] overflow-hidden pt-16">
        <Slider {...settings} className="h-full">
          {[ncdo5, ncdo4, ncdo7].map((bg, i) => (
            <div key={i} className="h-[90vh] relative">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                    Support Our Mission
                  </h1>
                  <p className="mt-4 text-lg max-w-3xl text-gray-100 drop-shadow-sm">
                    Be part of the change Whether through volunteering, donations, or partnerships, there are many ways to support community development in Loitokitok. Together, we can create lasting change.
                    Ready to make a difference? Your donation helps build resilient communities across Kenya.
                    Every contribution counts!
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* ✅ Donation Form with Flutterwave */}
      <section className="py-20 px-6 bg-[#F2ECE8] text-[#1D347A]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Make a Donation</h2>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border rounded-md transition duration-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border rounded-md transition duration-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="number"
              placeholder="Donation Amount (KES)"
              className="p-3 border rounded-md transition duration-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />
            <select
              className="p-3 border rounded-md transition duration-300 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={form.method}
              onChange={(e) => setForm({ ...form, method: e.target.value })}
            >
              <option value="">Select Payment Method</option>
              <option value="mpesa">M-Pesa</option>
              <option value="card">Credit/Debit Card</option>
            </select>

            {/* ✅ Flutterwave Donate Button */}
            <FlutterWaveButton
              {...fwConfig}
              className="bg-yellow-500 text-[#1D347A] px-6 py-3 rounded-md font-bold 
                         hover:bg-yellow-600 hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-black text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
          {/* Logo & About */}
          <div>
            <img src={ncdolgo} alt="NCDO Logo" className="w-28 mb-4 hover:scale-105 transition duration-300" />
            <p className="text-sm leading-relaxed">
              Noomayianat Community Development Organization (NCDO) is a non-profit working in Kajiado County, Kenya. <br />
              <span className="text-yellow-400 font-semibold">
                Building Resilient Communities for Sustainable Development.
              </span>
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-400 transition">Our Story</a></li>
              <li><a href="#programs" className="hover:text-yellow-400 transition">Our Programs</a></li>
              <li><a href="#partners" className="hover:text-yellow-400 transition">Partners</a></li>
              <li><a href="#careers" className="hover:text-yellow-400 transition">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#volunteer" className="hover:text-yellow-400 transition">Volunteer</a></li>
              <li><a href="#donate" className="hover:text-yellow-400 transition">Make a Donation</a></li>
              <li><a href="#impact" className="hover:text-yellow-400 transition">Impact Stories</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-3 mb-4">
              {[
                { icon: <FaFacebookF />, url: "https://www.facebook.com/p/Noomayianat-Community-Development-Organization-100068936304959/" },
                { icon: <FaTwitter />, url: "#" },
                { icon: <FaInstagram />, url: "#" },
                { icon: <FaWhatsapp />, url: "https://wa.me/254726214345" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#1D347A] p-3 rounded-full shadow 
                             hover:bg-yellow-400 hover:scale-110 hover:rotate-3 transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

           
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Noomayianat Community Development Organization. HQ:{" "}
            <span className="text-yellow-400">Kajiado County, Kimana Town, Kenya.</span> All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-yellow-400 transition">Terms & Conditions</a> |{" "}
            <a href="#" className="hover:text-yellow-400 transition">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
