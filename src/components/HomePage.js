/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import WatchVideo from "./WatchVideo";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { motion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import images
import ncdlgo from "../images/ncdlgo.png";
import ncdo1 from "../images/ncdo1.jpg";
import ncdo3 from "../images/ncdo3.jpg";
import ncdo4 from "../images/ncdo4.jpg";
import ncdo5 from "../images/ncdo5.jpeg";
import ncdo7 from "../images/ncdo7.jpeg";
import ncdo2 from "../images/ncdo2.jpeg";
import baraza from "../images/baraza.jpg";
import wetland from "../images/wetland.jpg";
import wetlands3 from "../images/wetland3.jpg";
import agriculture from "../images/agriculture.jpg";
import livestockdevelopment from "../images/livestockdevelopment.jpg";
import ecosystem from "../images/ecosystem.jpg";
import wateraccess from "../images/wateraccess.jpg";
import treeplanting from "../images/treeplanting.jpg";
import springfencing from "../images/springfencing.jpg";
import springpollution from "../images/springpollution.jpg";

// Partner images
import partner11 from "../images/partner11.png";
import partner12 from "../images/partner12.png";
import partner13 from "../images/partner13.png";
import partner14 from "../images/partner14.png";
import partner15 from "../images/partner15.png";
import partner16 from "../images/partner16.png";

import partner18 from "../images/partner18.png";
import partner19 from "../images/partner19.png";

export default function HomePage() {
  // Programs array (all using ncdo7 image)
   const [menuOpen, setMenuOpen] = useState(false);
  const programs = [
    {
  title: "Water conservation and management",
  img: wetland, 
  desc: `This program focuses reducing environmental pollution and improve public 
  health by promoting waste segregation, recycling, proper disposal systems, 
  and community awareness campaigns. 

  We work with local authorities, schools, and community groups to establish 
  waste collection structures, support recycling enterprises, and promote 
  environmentally responsible behaviors that contribute to cleaner and 
  healthier communities.`,
  impact: [
    "Community waste segregation systems established",
    "Reduction in illegal dumping sites",
    "Increased recycling participation rates",
    "Improved environmental hygiene in target areas"
  ]
},
 {
  title: "spring protection and rehabilitation",
  img: springfencing, 
  desc: `This program focuses reducing environmental pollution and improve public 
  health by promoting waste segregation, recycling, proper disposal systems, 
  and community awareness campaigns. 

  We work with local authorities, schools, and community groups to establish 
  waste collection structures, support recycling enterprises, and promote 
  environmentally responsible behaviors that contribute to cleaner and 
  healthier communities.`,
  impact: [
    "Community waste segregation systems established",
    "Reduction in illegal dumping sites",
    "Increased recycling participation rates",
    "Improved environmental hygiene in target areas"
  ]
},
 {
  title: "Spring pollution",
  img: springpollution, 
  desc: `This program focuses reducing environmental pollution and improve public 
  health by promoting waste segregation, recycling, proper disposal systems, 
  and community awareness campaigns. 

  We work with local authorities, schools, and community groups to establish 
  waste collection structures, support recycling enterprises, and promote 
  environmentally responsible behaviors that contribute to cleaner and 
  healthier communities.`,
  impact: [
    "Community waste segregation systems established",
    "Reduction in illegal dumping sites",
    "Increased recycling participation rates",
    "Improved environmental hygiene in target areas"
  ]
},




  {
    title: "Climate Change Adaptation & Ecosystem Restoration",
    img: ecosystem,
    desc: `In partnership with organizations such as the African Wildlife Foundation 
    and the Kimana Wetland Association, NCDO promotes climate resilience activities. 
    These include indigenous tree planting, ecosystem restoration, and community-based 
    climate adaptation strategies aimed at strengthening environmental stability and 
    resilience against climate shocks.`,
    impact: [
      "Indigenous trees planted across Kimana and neighboring areas",
      "Improved vegetation cover and soil stability",
      "Enhanced ecosystem resilience to climate change",
      "Community capacity strengthened in climate adaptation"
    ]
  },

  {
    title: "Water Access & Sustainable Infrastructure Development",
    img: wateraccess,
    desc: `NCDO improves access to clean and safe water through piped water 
    infrastructure and sustainable water management initiatives. We have 
    supported water flow regulation around wetlands and implemented piped 
    water projects benefiting Maasai households. The organization also promotes 
    drip irrigation technologies to enhance water efficiency in arid areas.`,
    impact: [
      "Clean water access expanded to rural households",
      "Improved water regulation around wetlands",
      "Drip irrigation systems introduced for water efficiency",
      "Enhanced agricultural productivity in dry regions"
    ]
  },

  {
    title: "Livestock Development & Sustainable Agriculture",
    img: livestockdevelopment,
    desc: `To strengthen livelihoods and food security, NCDO supports livestock 
    production and agricultural development. Activities include livestock vaccination 
    campaigns, collaboration on livestock infrastructure (such as slaughter facilities), 
    and farmer training on improved agricultural practices and food security strategies.`,
    impact: [
      "Improved herd health through vaccination campaigns",
      "Livestock infrastructure strengthened in target areas",
      "Increased food security and diversified livelihoods",
      "Capacity building for pastoralist and farming communities"
    ]
  },

  {
    title: "Community Engagement, Institutional Strengthening & Energy Solutions",
    img: ncdo4,
    desc: `NCDO actively participates in stakeholder forums and district development 
    committees, contributing to local policy and resource management decisions. 
    The organization mobilizes partnerships, secures development funding, and 
    strengthens community institutions. Through partnerships such as the National 
    Biogas Program, NCDO has supported household biogas installation to improve 
    clean energy access, sanitation, and reduce deforestation.`,
    impact: [
      "Stronger community representation in development planning",
      "Improved institutional and governance capacity",
      "Successful partnership mobilization for local projects",
      "Household biogas systems installed for clean energy access"
    ]
  
  },
  {
    title: "Tree Planting Initiatives",
    img: treeplanting,
    desc: `We organize large-scale tree planting drives to enhance green cover, improve 
    air quality, and combat climate change. The program engages schools, youth groups, 
    and community members in planting native trees while providing education on tree 
    care and ecosystem benefits.`,
    impact: [
      "10,000+ trees planted annually",
      "300+ volunteers engaged",
      "Increased community awareness on reforestation",
      "Improved biodiversity and green spaces in local areas"
    ]
  },
 

  {
    title: "Water Resource & Waste Management",
    img: ncdo5,
    desc: `We work to improve access to clean and safe water while promoting 
    responsible waste management systems. Our interventions include water 
    conservation, protection of water sources, rainwater harvesting, waste 
    segregation, recycling initiatives, and community-led sanitation programs.`,
    impact: [
      "Improved access to clean water sources",
      "Community waste management systems established",
      "Reduction in illegal dumping and pollution",
      "Enhanced hygiene and sanitation practices"
    ]
  },

  {
    title: "Agriculture & Agroforestry",
    img: agriculture,
    desc: `This program strengthens food security and livelihoods through 
    sustainable agriculture and agroforestry practices. We train farmers on 
    climate-smart agriculture, soil conservation, tree planting, and sustainable 
    land use to improve productivity while protecting the environment.`,
    impact: [
      "Increased crop productivity for local farmers",
      "Adoption of climate-smart farming techniques",
      "Expansion of agroforestry and tree planting initiatives",
      "Improved household food security"
    ]
  },

  

  ];

const [videoOpen, setVideoOpen] = useState(false);
const navigate = useNavigate();
  const partnerLogos = [partner11, partner12, partner13, partner14, partner15, partner16, partner18, partner19];

  // 🔹 Background slideshow setup
  const bgImages = [ncdo3, ncdo4, ncdo2, baraza];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // switch every 5 seconds
    return () => clearInterval(interval);
  }, [bgImages.length]);


  const SimpleSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <img
      src={images[index]}
      alt=""
      className="w-full h-52 object-cover"
    />
  );
};


  return (
    <div className="font-sans">

      {/* Navbar */}

{/* Navbar */}
{/* Navbar */}
   <nav className="fixed top-0 left-0 w-full bg-[#1D347A] shadow-md px-4 sm:px-6 py-3 text-white z-50">
      <div className="flex items-center justify-between">
        {/* Logo + Text */}
        <div className="flex items-center space-x-2">
          <img src={ncdlgo} alt="NCDO Logo" className="w-16 h-10 object-contain" />
          <span className="text-xs sm:text-sm md:text-base font-bold leading-tight">
            NOOMAYIANAT <br /> Community Development
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li>
  <Link
    to="/"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
   className="hover:text-red-500 transition-all duration-300"
  >
    Home
  </Link>
</li>

          <li><a href="#about" className="hover:text-[#F2ECE8]">Who We Are</a></li>
          <li><a href="#programs" className="hover:text-[#F2ECE8]">Programs</a></li>
          <li><a href="#stories" className="hover:text-[#F2ECE8]">Impact</a></li>
          <li><a href="#contact" className="hover:text-[#F2ECE8]">Contact Us</a></li>
        </ul>

        {/* Donate Button (Desktop) */}
        <Link
          to="/Donate"
          className="hidden md:inline-block bg-[#7382AD] text-white px-3 py-1.5 rounded-md font-bold text-sm hover:bg-red-600 hover:text-white transition-all duration-300"
        >
          Donate
        </Link>

        {/* Mobile Hamburger */}
       {/* Mobile Hamburger */}
<div className="md:hidden">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="relative z-[60] w-10 h-10 flex flex-col justify-center items-center"
  >
    <span
      className={`w-6 h-0.5 bg-white transition-all duration-300 ${
        menuOpen ? "rotate-45 translate-y-1.5" : ""
      }`}
    />
    <span
      className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
        menuOpen ? "opacity-0" : ""
      }`}
    />
    <span
      className={`w-6 h-0.5 bg-white transition-all duration-300 ${
        menuOpen ? "-rotate-45 -translate-y-1.5" : ""
      }`}
    />
  </button>
</div>

{/* Mobile Menu */}
<div
  className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
    menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>
  {/* Backdrop */}
  <div
    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
    onClick={() => setMenuOpen(false)}
  />

  {/* Drawer */}
  <div
    className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#1D347A] shadow-2xl transition-transform duration-500 ${
      menuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* Header */}
    <div className="flex items-center justify-between p-5 border-b border-white/10">
      <div className="flex items-center gap-3">
        <img
          src={ncdlgo}
          alt="NCDO Logo"
          className="w-12 h-12 object-contain"
        />
        <div>
          <h3 className="font-bold text-sm">NOOMAYIANAT</h3>
          <p className="text-xs text-gray-300">Community Development</p>
        </div>
      </div>

      <button
        onClick={() => setMenuOpen(false)}
        className="text-2xl text-white hover:text-red-500 transition-colors duration-300"
      >
        ×
      </button>
    </div>

    {/* Navigation */}
    <div className="flex flex-col p-6">
      <Link
        to="/"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setMenuOpen(false);
        }}
        className="py-4 text-lg border-b border-white/10 hover:text-red-500 hover:translate-x-1 transition-all duration-300"
      >
        Home
      </Link>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="py-4 text-lg border-b border-white/10 hover:text-red-500 hover:translate-x-1 transition-all duration-300"
      >
        Who We Are
      </a>

      <a
        href="#programs"
        onClick={() => setMenuOpen(false)}
        className="py-4 text-lg border-b border-white/10 hover:text-red-500 hover:translate-x-1 transition-all duration-300"
      >
        Programs
      </a>

      <a
        href="#stories"
        onClick={() => setMenuOpen(false)}
        className="py-4 text-lg border-b border-white/10 hover:text-red-500 hover:translate-x-1 transition-all duration-300"
      >
        Impact
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="py-4 text-lg border-b border-white/10 hover:text-red-500 hover:translate-x-1 transition-all duration-300"
      >
        Contact Us
      </a>

      <Link
        to="/donate"
        onClick={() => setMenuOpen(false)}
        className="mt-8 bg-[#7382AD] text-white text-center py-4 rounded-xl font-bold hover:bg-red-600 hover:text-white hover:scale-105 transition-all duration-300"
      >
        Donate Now
      </Link>
    </div>

    {/* Footer */}
    <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/10 text-center text-xs text-gray-300">
      Empowering Communities Through Sustainable Development
    </div>
  </div>
</div>
</div>
    </nav>


      {/* Hero Section with sliding background */}
<section className="relative min-h-[80vh] max-h-[800px] flex items-center overflow-hidden">

  {/* ================= SLIDES ================= */}
  {bgImages.map((img, i) => (
    <motion.img
      key={i}
      src={img}
      alt="hero slide"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{
        opacity: i === currentIndex ? 1 : 0,
        scale: i === currentIndex ? 1 : 1.05,
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full object-cover"
    />
  ))}

  {/* ================= OVERLAYS ================= */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(29,52,122,0.25),transparent_60%)]" />

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">

    <div className="max-w-3xl text-left pt-16 sm:pt-0">

      {/* BADGE */}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/20"
      >
        🌍 Non-Profit Organization • Kajiado County, Kenya
      </motion.span>

      {/* TITLE */}
      <motion.h1
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-5 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white"
      >
        Noomayianat Community
        <br />
        <span className="text-[#7382AD]">
          Development Organization
        </span>
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        key={`desc-${currentIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl"
      >
        Empowering communities in Kajiado County through sustainable development,
        climate resilience, education, water access, and livelihood transformation.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <Link
          to="/watch-video"
          className="
            bg-white/10 hover:bg-white/20
            text-white
            px-4 sm:px-6
            py-2.5 sm:py-3
            rounded-full
            text-sm sm:text-base
            font-medium
            backdrop-blur-md
            border border-white/20
            transition-all duration-300
            hover:scale-105
            whitespace-nowrap
          "
        >
          🎥 Watch Videos
        </Link>

        <a
          href="#contact"
          className="
            border border-white/70
            text-white
            px-4 sm:px-6
            py-2.5 sm:py-3
            rounded-full
            text-sm sm:text-base
            font-medium
            transition-all duration-300
            hover:bg-white
            hover:text-black
            hover:scale-105
            whitespace-nowrap
          "
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  </div>

  {/* ================= SCROLL INDICATOR ================= */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 animate-bounce text-xs sm:text-sm">
    ↓ Scroll Down
  </div>

  {/* ================= VIDEO MODAL ================= */}
  {videoOpen && (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="relative w-[92%] md:w-[65%] aspect-video rounded-xl overflow-hidden shadow-2xl">
        <button
          onClick={() => setVideoOpen(false)}
          className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded z-10"
        >
          ✕
        </button>

        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="NCDO Video"
          allowFullScreen
        />
      </div>
    </div>
  )}
</section>


     {/* Who We Are Section */}
<section id="about" className="py-20 px-6 bg-[#F2ECE8] text-[#1D347A]">
  <div className="max-w-7xl mx-auto">

    {/* About Top Section */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

      {/* Left Image */}
      <div className="relative">
        <img
          src={wetland}
          alt="Wetland Conservation"
          className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>

        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold">Empowering Communities</h3>
          <p className="text-sm opacity-90">
            Building sustainable livelihoods through community-driven initiatives.
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Who We Are
        </h2>

        <div className="w-24 h-1 bg-[#7382AD] rounded-full mb-8"></div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          NCDO is dedicated to improving the lives of vulnerable communities
          in Kenya. Formed in 2005 by experienced youth professionals, the
          organization was established to address environmental degradation,
          drought mitigation, and food security challenges affecting
          Loitokitok Sub-County.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Officially registered in 2006, NCDO has successfully implemented
          numerous community development initiatives in partnership with
          government institutions, donors, and civil society organizations.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          With over 24 years of experience, our team collaborates closely with
          local communities and stakeholders to deliver sustainable,
          measurable, and impactful solutions.
        </p>
      </div>

    </div>

    {/* Mission Vision Values */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Mission */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-[#1D347A] rounded-full flex items-center justify-center text-4xl text-white">
          🌍
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Our Mission
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Working with communities in Loitokitok to promote sustainable
          development through resource mobilization, training, and knowledge
          dissemination.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-[#7382AD] rounded-full flex items-center justify-center text-4xl text-white">
          👁
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Our Vision
        </h3>

        <p className="text-gray-700 leading-relaxed">
          A thriving Loitokitok community where every member has access to
          opportunities for growth, education, and sustainable livelihoods.
        </p>
      </div>

      {/* Values */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-yellow-500 rounded-full flex items-center justify-center text-4xl text-white">
          🤝
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Our Values
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Community collaboration, transparency, sustainability, and
          empowerment guide everything we do in service of our communities.
        </p>
      </div>

    </div>
  </div>
</section>


     

   {/* Programs Section */}
<section id="programs" className="py-20 px-6 bg-[#e9eaec]">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold tracking-tight text-[#1D347A] mb-4">
      NCDO Components
    </h2>
    <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
      Comprehensive initiatives designed to address the diverse needs of our
      community and create measurable, lasting impact.
    </p>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {programs.map((p, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden flex flex-col border-t-4 border-[#1D347A]"
        >
          <div className="relative overflow-hidden">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-[#1D347A] mb-3">
              {p.title}
            </h3>
            <p className="text-gray-600 flex-grow leading-relaxed">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

 {/* CTA Section */}
<section
  id="cta"
  className="relative py-24 px-6 overflow-hidden"
>
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#1D347A] via-[#2A4BA8] to-[#1D347A]"></div>

  {/* Decorative circles */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

    {/* Badge */}
    <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-semibold mb-6">
      🌍 Together We Can Make a Difference
    </span>

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
      Join the Movement for
      <span className="block text-yellow-400">
        Sustainable Community Change
      </span>
    </h2>

    {/* Description */}
    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
      Become part of a growing network of volunteers, partners, and supporters
      working to improve livelihoods, protect the environment, and empower
      communities across Kajiado County.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">

      <a
        href="#contact"
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full shadow-xl transition duration-300"
      >
        🤝 Volunteer With Us
      </a>

      <a
        href="/donate"
        className="border-2 border-white text-white hover:bg-white hover:text-[#1D347A] font-bold px-8 py-4 rounded-full transition duration-300"
      >
        ❤️ Support Our Mission
      </a>

    </div>

    {/* Small trust text */}
    <p className="mt-8 text-sm text-gray-300">
      Empowering communities through environmental conservation,
      water access, climate resilience, and sustainable livelihoods.
    </p>

  </div>
</section>


{/* Real Stories Section */}
{/* Integrated Landscape - Advanced Impact Stories */}
{/* Integrated Landscape - Advanced Impact Stories */}
<section className="py-16 md:py-24 px-4 md:px-6 bg-[#EEF4FF]">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-12 md:mb-16">
      <span className="inline-block px-4 md:px-5 py-2 bg-[#1D347A]/10 text-[#1D347A] rounded-full text-xs md:text-sm font-semibold mb-4 tracking-wide">
        Integrated Landscape Programme
      </span>

      <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D347A] mb-4 leading-tight">
        Impact Stories Across Key Sectors
      </h2>

      <div className="w-20 md:w-24 h-1 bg-[#7382AD] mx-auto rounded-full mb-6"></div>

      <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
        Integrated interventions are strengthening ecosystems, improving livelihoods,
        and building long-term community resilience.
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">

        <div className="p-6 md:p-8 border-l-6 md:border-l-8 border-[#1D347A]">

          <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#1D347A] uppercase">
            Water Systems
          </span>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2 mb-3 leading-snug">
            Restoring Water Security & Watersheds
          </h3>

          <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
            Communities are gaining reliable access to clean water through restored
            ecosystems and improved governance systems.
          </p>

          <div className="space-y-2 text-gray-700 text-sm">
            <div>✔ Watershed & spring protection restored</div>
            <div>✔ Wetlands rehabilitated for ecosystem balance</div>
            <div>✔ Community water governance strengthened</div>
            <div>✔ Water infrastructure improved & expanded</div>
            <div>✔ Water quality monitoring systems introduced</div>
          </div>

        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">

        <div className="p-6 md:p-8 border-l-6 md:border-l-8 border-[#7382AD]">

          <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#7382AD] uppercase">
            Agriculture
          </span>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2 mb-3 leading-snug">
            Strengthening Climate-Smart Food Systems
          </h3>

          <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
            Farmers are improving productivity and resilience through sustainable
            and market-driven agricultural systems.
          </p>

          <div className="space-y-2 text-gray-700 text-sm">
            <div>✔ Climate-smart agriculture adoption</div>
            <div>✔ Sustainable irrigation systems introduced</div>
            <div>✔ Soil & water conservation improved</div>
            <div>✔ Crop diversification enhanced food security</div>
            <div>✔ Value chains & market access strengthened</div>
          </div>

        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">

        <div className="p-6 md:p-8 border-l-6 md:border-l-8 border-[#1D347A]">

          <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#1D347A] uppercase">
            Rangelands
          </span>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2 mb-3 leading-snug">
            Restoring Rangelands & Climate Resilience
          </h3>

          <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
            Degraded grazing lands are being restored to improve livestock productivity
            and climate resilience.
          </p>

          <div className="space-y-2 text-gray-700 text-sm">
            <div>✔ Rangeland restoration ongoing</div>
            <div>✔ Sustainable grazing systems introduced</div>
            <div>✔ Livestock productivity improved</div>
            <div>✔ Drought preparedness strengthened</div>
            <div>✔ Community grazing governance enhanced</div>
          </div>

        </div>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">

        <div className="p-6 md:p-8 border-l-6 md:border-l-8 border-[#7382AD]">

          <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#7382AD] uppercase">
            Ecosystems
          </span>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2 mb-3 leading-snug">
            Conserving Biodiversity & Ecosystems
          </h3>

          <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
            Ecosystem restoration is improving biodiversity and strengthening
            human–wildlife coexistence.
          </p>

          <div className="space-y-2 text-gray-700 text-sm">
            <div>✔ Biodiversity conservation strengthened</div>
            <div>✔ Habitat restoration implemented</div>
            <div>✔ Human-wildlife coexistence improved</div>
            <div>✔ Climate adaptation actions scaled</div>
            <div>✔ Environmental awareness increased</div>
          </div>

        </div>
      </div>

      {/* FULL WIDTH CARD */}
      <div className="md:col-span-2 bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">

        <div className="p-6 md:p-10 border-l-6 md:border-l-8 border-[#1D347A]">

          <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#1D347A] uppercase">
            Livelihoods & Governance
          </span>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3 leading-snug">
            Empowering Communities for Sustainable Livelihoods
          </h3>

          <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed max-w-4xl">
            Communities are building resilient economies through enterprise development,
            inclusive governance, and strengthened local institutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 text-sm">
            <div>✔ Livelihood diversification & enterprise growth</div>
            <div>✔ Women & youth empowerment strengthened</div>
            <div>✔ Financial inclusion expanded</div>
            <div>✔ Community governance improved</div>
            <div>✔ Capacity building & partnerships enhanced</div>
          </div>

        </div>
      </div>

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
      <p><strong>HQ:</strong> Kajiado County,Kimana Town,Kenya</p>
      <p><strong>Email:</strong> johnoitaos713@gmail.com</p>
      <p><strong>Phone:</strong> +254 726 748776</p>           
    </div>
    
    {/* Social Media */}
    <div className="flex justify-center space-x-6 mt-6">
      <a href="#programs" className="text-[#1D347A] hover:text-yellow-500 text-2xl">🌐</a>
      <a href="#programs" className="text-[#1D347A] hover:text-yellow-500 text-2xl">📘</a>
      <a href="#programs" className="text-[#1D347A] hover:text-yellow-500 text-2xl">🐦</a>
      <a href="#programs" className="text-[#1D347A] hover:text-yellow-500 text-2xl">📸</a>
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
          <img src={ncdlgo} alt="NCDO Logo" className="w-28 mb-4" />
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
            <li><a href="#programs" className="hover:text-yellow-400">Volunteer</a></li>
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
              { icon: <FaFacebookF />, url: "https://www.facebook.com/p/NCDO-Noomayianat-Community-Development-Organization-61588396622199/" },
              { icon: <FaTwitter />, url: "#" },
              { icon: <FaInstagram />, url: "#" },
              { icon: <FaWhatsapp />, url: "https://wa.me/254 726748776" },
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
  

 
      {/* ... your footer code remains the same ... */}
    </div>
  );
}
