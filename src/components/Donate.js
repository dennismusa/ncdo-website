/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ✅ Logo
import ncdologo from "../images/ncdolgo.jpg";

// ✅ Background images (make sure these files exist in /src/images)
import ncdo4 from "../images/ncdo4.jpg";
import ncdo5 from "../images/ncdo5.jpeg";
import ncdo7 from "../images/ncdo7.jpeg";

export default function Donate() {
  // ✅ Slider settings
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="font-sans">
      {/* ✅ Top Navbar */}
      <nav className="bg-[#1D347A] shadow-md flex items-center justify-between px-6 py-4 text-white fixed top-0 w-full z-50">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={ncdologo} alt="NCDO Logo" className="w-24 h-12 object-contain" />
          <span className="font-bold text-lg">NCDO</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li><a href="/" className="hover:text-yellow-400">Home</a></li>
          <li><a href="/#about" className="hover:text-yellow-400">Who We Are</a></li>
          <li><a href="/#programs" className="hover:text-yellow-400">Programs</a></li>
          <li><a href="/#contact" className="hover:text-yellow-400">Contact Us</a></li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-3">
          <a href="https://facebook.com" className="hover:text-yellow-400"><FaFacebookF /></a>
          <a href="https://twitter.com" className="hover:text-yellow-400"><FaTwitter /></a>
          <a href="https://instagram.com" className="hover:text-yellow-400"><FaInstagram /></a>
          <a href="https://wa.me/254726214345" className="hover:text-yellow-400"><FaWhatsapp /></a>
        </div>
      </nav>

      {/* ✅ Hero Section with Sliding Background */}
      <section className="relative text-white w-full h-[90vh] overflow-hidden pt-16">
        <Slider {...settings} className="h-full">
          {[ncdo5, ncdo4, ncdo7].map((bg, i) => (
            <div key={i} className="h-[90vh] relative">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                    Support Our Mission
                  </h1>
                  <p className="mt-4 text-lg max-w-3xl text-gray-100 drop-shadow-sm">
                    Your donation helps build resilient communities across Ethiopia, Kenya, and Somalia.
                    Join us in making a meaningful impact! Every contribution counts.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* ✅ Donation Form Section */}
      <section className="py-20 px-6 bg-[#F2ECE8] text-[#1D347A]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Make a Donation</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Full Name" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <input type="email" placeholder="Email Address" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <input type="number" placeholder="Donation Amount (USD)" className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <select className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option value="">Select Payment Method</option>
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="mpesa">M-Pesa</option>
            </select>
            <button type="submit" className="bg-yellow-500 text-[#1D347A] px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition duration-300">
              Donate Now
            </button>
          </form>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-black text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
          {/* Logo & About */}
          <div>
            <img src={ncdologo} alt="NCDO Logo" className="w-28 mb-4" />
            <p className="text-sm leading-relaxed">
              Noomayianat Community Development Organization (NCDO) is a non-profit working in Kajiado County, Kenya.
              <br />
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
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
                   className="bg-white text-[#1D347A] p-3 rounded-full shadow hover:bg-yellow-400 hover:text-[#1D347A] transition">
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm mb-3">Want updates? Sign up for our newsletter.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Email"
                     className="px-3 py-2 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <button type="submit" className="bg-yellow-500 text-[#1D347A] px-4 py-2 rounded-md hover:bg-yellow-600 transition">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Noomayianat Community Development Organization.  
            HQ: <span className="text-yellow-400">Kajiado County, Kimana Town, Kenya.</span>  
            All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-yellow-400">Privacy Policy</a> | 
            <a href="#" className="hover:text-yellow-400">Terms & Conditions</a> | 
            <a href="#" className="hover:text-yellow-400">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
