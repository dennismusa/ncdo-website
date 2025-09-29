/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import WatchVideo from "./WatchVideo";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import images
import ncdolgo from "../images/ncdolgo.jpg";
import ncdo3 from "../images/ncdo3.jpg";
import ncdo4 from "../images/ncdo4.jpg";
import ncdo5 from "../images/ncdo5.jpeg";
import ncdo7 from "../images/ncdo7.jpeg";

// Partner images
import partner1 from "../images/partners1.png";
import partner2 from "../images/partner2.jpg";
import partner3 from "../images/partner3.png";
import partner4 from "../images/partner4.png";
import partner5 from "../images/partner5.png";

export default function HomePage() {
  // Programs array (all using ncdo7 image)
  const programs = [
    {
      title: "Wetlands Restoration and Management",
      desc: "Engaging communities to restore and sustainably manage wetlands.",
      img: ncdo7,
    },
    {
      title: "Community Baraza",
      desc: "Organizing community forums to discuss local environmental issues.",
      img: ncdo7,
    },
    {
      title: "Awareness for Wetlands Project",
      desc: "Raising awareness on the importance of wetlands conservation.",
      img: ncdo7,
    },
    {
      title: "Nature Conservation Day",
      desc: "A day dedicated to promoting nature conservation activities.",
      img: ncdo7,
    },
    {
      title: "Environmental Education",
      desc: "Educating local communities and schools on environmental protection.",
      img: ncdo4,
    },
    {
      title: "Tree Planting Initiatives",
      desc: "Organizing tree planting drives to enhance green cover.",
      img: ncdo5,
    },
  ];

  const partnerLogos = [partner1, partner2, partner3, partner4, partner5];

  // 🔹 Background slideshow setup
  const bgImages = [ncdo3, ncdo4, ncdo5, ncdo7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // switch every 5 seconds
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-[#1D347A] shadow-md flex items-center justify-between px-6 py-4 text-white">
        <div className="flex items-center space-x-3">
          <img src={ncdolgo} alt="NCDO Logo" className="w-24 h-12 object-contain" />
        </div>
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li><Link to="/" className="hover:text-[#F2ECE8]">Home</Link></li>
          <li><a href="#about" className="hover:text-[#F2ECE8]">Who We Are</a></li>
          <li><a href="#programs" className="hover:text-[#F2ECE8]">Programs</a></li>
          <li><a href="#contact" className="hover:text-[#F2ECE8]">Contact Us</a></li>
        </ul>
        <Link
          to="/donate"
          className="bg-[#7382AD] text-white px-4 py-2 rounded-md font-bold hover:bg-[#F2ECE8] hover:text-[#1D347A] transition"
        >
          Donate Now
        </Link>
      </nav>

      {/* Hero Section with sliding background */}
      <section
        id="home"
        className="relative bg-cover bg-center text-white py-32 px-6 md:py-48 transition-all duration-1000"
        style={{
          backgroundImage: `url(${bgImages[currentIndex]})`,
          backgroundColor: "#C7B7B3",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl md:mx-0 text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Noomayianat Community Development Organization
          </h1>
          <p className="mt-4 text-lg text-gray-100 drop-shadow-sm">
            NCDO - Noomayianat Community Development Organization is a community
            based and non-profit organization working in Kajiado County, Kenya.
            <br />
            Building Resilient Communities For Sustainable Development.
          </p>
          <div className="mt-6 space-x-4 flex">
            {/* Watch Video Modal */}
            <WatchVideo />
            {/* About Us Button */}
            <a
              href="#about"
              className="inline-block bg-white text-[#1D347A] px-6 py-3 rounded-md font-semibold hover:bg-[#7382AD] hover:text-white transition duration-300"
            >
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-20 px-6 bg-[#F2ECE8] text-[#1D347A]">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg md:text-xl mb-4">
            NCDO is dedicated to improving the lives of vulnerable communities in Ethiopia, Kenya, and Somalia. 
            Our mission is to build resilient, self-sufficient communities through sustainable programs in water, sanitation, food security, governance, and peace.
          </p>
          <p className="text-lg md:text-xl">
            With over 24 years of experience, our team collaborates with local partners and stakeholders to ensure impactful, measurable results for communities in need.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-6 text-center" style={{ backgroundColor: "#1D347A" }}>
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the movement for change! Be a catalyst for transformation.
          </h2>
          <p className="mb-6 text-lg">
            Volunteer with us to shape a better future together.
          </p>
          <div className="space-x-4">
            <a
              href="/donate"
              className="inline-block bg-[#1D347A] text-white px-5 py-2 rounded-md font-bold hover:bg-[#C7B7B3] transition"
            >
              Volunteer Now
            </a>
            <a
              href="/donate"
              className="inline-block bg-[#F2ECE8] text-[#1D347A] px-5 py-2 rounded-md font-bold hover:bg-[#7382AD] hover:text-white transition"
            >
              Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-6 bg-[#F7F7F9]">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold tracking-wide text-[#1D347A] mb-4">
      Our Programs
    </h2>
    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
      We run impactful initiatives designed to empower communities and create lasting change.
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {programs.map((p, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden flex flex-col"
        >
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-[#1D347A] mb-3">
              {p.title}
            </h3>
            <p className="text-gray-700 flex-grow mb-4">{p.desc}</p>
            
            <div className="flex justify-between items-center mt-auto">
              <a
                href="#"
                className="text-[#7382AD] font-semibold hover:underline"
              >
                Learn More →
              </a>
              <Link
                to="/donate"
                className="bg-[#1D347A] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#7382AD] transition"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Partners Section */}
      <section id="partners" className="py-16 bg-[#F2ECE8] text-center">
        <h2 className="text-3xl font-bold uppercase mb-8 text-[#1D347A]">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {partnerLogos.map((src, i) => (
            <img key={i} src={src} alt={`Partner ${i + 1}`} className="h-20 object-contain hover:scale-110 transition duration-300" />
          ))}
        </div>
      </section>

      {/* Contact Section */}
  {/* Contact Page */}
<section id="contact" className="w-full">
  
  {/* Google Map - Kimana Town */}
  <div className="w-full h-80">
    <iframe
      title="Our Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.379214934123!2d37.5135!3d-2.7771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1844736b2a3d0b23%3A0xa4f87bcd649f8d6d!2sKimana%2C%20Kenya!5e0!3m2!1sen!2ske!4v1698236000000!5m2!1sen!2ske"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Contact Info */}
  <div className="text-center py-12 bg-white">
    <h2 className="text-3xl font-bold text-[#1D347A] mb-4">
      LET’S <span className="text-yellow-500">TALK</span>
    </h2>
    
    <p className="text-lg text-gray-600 mb-6">
      Have questions or want to reach us directly? Here’s how:
    </p>
    
    <div className="space-y-3 text-gray-700">
      <p><strong>HQ:</strong> Kimana Town, Kajiado County, Kenya</p>
      <p><strong>Email:</strong> dennismusa58@gmail.com</p>
      <p><strong>Phone:</strong> +254 726 214 345</p>
    </div>
    
    {/* Social Media */}
    <div className="flex justify-center space-x-6 mt-6">
      <a href="#" className="text-[#1D347A] hover:text-yellow-500 text-2xl">🌐</a>
      <a href="#" className="text-[#1D347A] hover:text-yellow-500 text-2xl">📘</a>
      <a href="#" className="text-[#1D347A] hover:text-yellow-500 text-2xl">🐦</a>
      <a href="#" className="text-[#1D347A] hover:text-yellow-500 text-2xl">📸</a>
    </div>
  </div>

  {/* Help Section */}
  <div className="py-12 bg-gray-100">
    <h3 className="text-center text-2xl font-bold text-[#1D347A] mb-8">
      HOW CAN WE <span className="text-yellow-500">HELP?</span>
    </h3>
    
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="text-4xl mb-4">❓</div>
        <h4 className="text-lg font-semibold mb-2">I need help!</h4>
        <p className="text-gray-600">Get support with your inquiries.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="text-4xl mb-4">🤝</div>
        <h4 className="text-lg font-semibold mb-2">Business Opportunity</h4>
        <p className="text-gray-600">Partner with us for growth.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="text-4xl mb-4">📚</div>
        <h4 className="text-lg font-semibold mb-2">I’m a Publisher</h4>
        <p className="text-gray-600">Collaborate with us on content.</p>
      </div>
    </div>
  </div>
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
          <p className="text-sm mb-3">
            Want updates? Sign up for our newsletter.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-md w-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-[#1D347A] px-4 py-2 rounded-md hover:bg-yellow-600 transition"
            >
              Sign Up
            </button>
          </form>
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
  

 
      {/* ... your footer code remains the same ... */}
    </div>
  );
}
