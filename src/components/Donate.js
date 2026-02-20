/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ncdo4 from "../images/ncdo4.jpg";
import ncdo5 from "../images/ncdo5.jpeg";
import ncdo7 from "../images/ncdo7.jpeg";
import ncdolgo from "../images/ncdolgo.jpg";

export default function Donate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    method: "",
  });

  const { pathname } = useLocation();

  // Force M-Pesa on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setForm((prev) => ({ ...prev, method: "mpesa" }));
    }
  }, []);

  // ================= VALIDATION =================
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!emailRegex.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.amount || form.amount < 100)
      newErrors.amount = "Minimum donation is 100 KES";
    if (!form.method) newErrors.method = "Select payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = () => {
    if (!validate()) return;
    setLoading(true);
  };

  const presetAmounts = [1000, 2000, 5000];

  // ================= FLUTTERWAVE CONFIG =================
  const config = {
    public_key: "FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx-X",
    tx_ref: Date.now(),
    amount: form.amount || 0,
    currency: "KES",
    payment_options: form.method,
    customer: {
      email: form.email,
      phonenumber: "",
      name: form.name,
    },
    customizations: {
      title: "Noomayianat Community Development",
      description: "Community Donation",
      logo: ncdolgo,
    },
  };

  const fwConfig = {
    ...config,
    text: loading ? "Processing..." : `Donate KES ${form.amount || 0}`,
    callback: () => {
      setLoading(false);
      closePaymentModal();
      setSuccess(true);
    },
    onClose: () => setLoading(false),
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="font-sans overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-[#1D347A] shadow-md px-6 py-3 text-white z-50">
        <div className="flex items-center justify-between">

          <div className="flex items-center space-x-2">
            <img src={ncdolgo} alt="NCDO Logo" className="w-14 h-auto" />
            <span className="text-sm font-bold leading-tight">
              NOOMAYIANAT <br /> Community Development
            </span>
          </div>

          <ul className="hidden md:flex space-x-6 font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">Who We Are</Link></li>
            <li><Link to="/#programs">Programs</Link></li>
            <li><Link to="/#stories">Impact</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>

          {pathname !== "/donate" && (
            <Link
              to="/donate"
              className="hidden md:inline-block bg-[#7382AD] px-3 py-1 rounded-md font-bold text-sm hover:bg-yellow-500 hover:text-[#1D347A]"
            >
              Donate
            </Link>
          )}

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 space-y-3 bg-[#1D347A] mt-2 rounded-lg">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/#about" onClick={() => setMenuOpen(false)}>Who We Are</Link>
            <Link to="/#programs" onClick={() => setMenuOpen(false)}>Programs</Link>
            <Link to="/#stories" onClick={() => setMenuOpen(false)}>Impact</Link>
            <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative text-white w-full h-[75vh] pt-20">
        <Slider {...sliderSettings}>
          {[ncdo5, ncdo4, ncdo7].map((bg, i) => (
            <div key={i}>
              <div
                className="h-[75vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="bg-black/60 w-full h-full flex flex-col items-center justify-center text-center px-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-6xl font-bold"
                  >
                    Support Our Mission
                  </motion.h1>
                  <p className="mt-4 max-w-2xl">
                    Your donation helps build resilient communities across Kenya.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* ================= DONATION FORM ================= */}
      <section className="py-20 px-6 bg-[#F2ECE8] text-[#1D347A]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Make a Donation
          </h2>

          {/* Preset Buttons */}
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setForm({ ...form, amount: amt })}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  form.amount == amt
                    ? "bg-yellow-500 text-white scale-110 shadow-lg"
                    : "bg-gray-100 hover:bg-yellow-100"
                }`}
                aria-label={`Donate ${amt} Kenyan Shillings`}
              >
                KES {amt}
              </button>
            ))}
          </div>

          <div className="grid gap-4">

            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border rounded-md focus:ring-2 focus:ring-yellow-400"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border rounded-md focus:ring-2 focus:ring-yellow-400"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="number"
              placeholder="Donation Amount (KES)"
              className="p-3 border rounded-md focus:ring-2 focus:ring-yellow-400"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              aria-invalid={errors.amount ? "true" : "false"}
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}

            {window.innerWidth >= 768 && (
              <select
                className="p-3 border rounded-md"
                value={form.method}
                onChange={(e) => setForm({ ...form, method: e.target.value })}
              >
                <option value="">Select Payment Method</option>
                <option value="mpesa">M-Pesa</option>
                <option value="card">Card</option>
              </select>
            )}

            <FlutterWaveButton
              {...fwConfig}
              onClick={handlePayment}
              disabled={loading}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#1D347A] font-bold py-3 rounded-lg shadow-md hover:scale-105 transition duration-300 flex justify-center items-center"
            >
              {loading && (
                <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
            </FlutterWaveButton>

            <p className="text-xs text-gray-500 text-center mt-2">
              🔒 Secure payment powered by Flutterwave.
            </p>

          </div>
        </motion.div>
      </section>
      {/* Footer */}

  <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
        
        {/* Logo & About */}
        <div>
          <img src={ncdolgo} alt="NCDO Logo" className="w-28 mb-4" />
          <p className="text-sm leading-relaxed">
            Noomayianat Community Development Organization (NCDO) is a 
            non-profit working in Kajiado County, Kenya. <br />
            <span className="text-yellow-400 font-semibold">Building Resilient Communities for Sustainable Development.</span>
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-yellow-400">Our Story</a></li>
            <li><a href="#programs" className="hover:text-yellow-400">Our Programs</a></li>
            <li><a href="#partners" className="hover:text-yellow-400">Partners</a></li>
            <li><a href="#careers" className="hover:text-yellow-400">Careers</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#volunteer" className="hover:text-yellow-400">Volunteer</a></li>
            <li><a href="#donate" className="hover:text-yellow-400">Make a Donation</a></li>
            <li><a href="#impact" className="hover:text-yellow-400">Impact Stories</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Connect & Newsletter */}
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
                className="bg-white text-[#1D347A] p-3 rounded-full shadow hover:bg-yellow-400 hover:text-[#1D347A] transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
                    
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Noomayianat Community Development Organization.  
          HQ: <span className="text-yellow-400">Kajiado County, Kimana Town, Kenya.</span>  
          All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a> | 
          <a href="#" className="hover:text-yellow-400"> Terms & Conditions</a> | 
          <a href="#" className="hover:text-yellow-400"> Accessibility</a>
        </div>
      </div>
    </footer>

      {/* ================= SUCCESS MODAL ================= */}
      {success && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl text-center max-w-md">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Thank You! 🎉
            </h2>
            <p>Your support creates real impact in our community.</p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 bg-yellow-500 px-6 py-2 rounded-md font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      
      )}
    </div>
    
  );
}
