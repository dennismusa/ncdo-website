/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import WatchVideo from "./WatchVideo";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import images
import ncdolgo from "../images/ncdolgo.jpg";
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
//import awareness from "../images/awareness.jpg";
//import wetland from "../images/awareness.jpg";

// Partner images
import partner1 from "../images/partners1.png";
import partner2 from "../images/partner2.jpg";
import partner3 from "../images/partner3.png";
import partner4 from "../images/partner4.png";
import partner5 from "../images/partner5.png";

export default function HomePage() {
  // Programs array (all using ncdo7 image)
   const [menuOpen, setMenuOpen] = useState(false);
  const programs = [
    {
  title: "Waste Management, Pollution Control & Environmental Health",
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
    title: "Environmental Conservation & Natural Resource Management",
    img: wetlands3,
    desc: `NCDO works to conserve and sustainably manage natural resources, 
    particularly the Kimana Wetlands — a critical ecosystem supporting wildlife, 
    livestock, and community livelihoods. Through community mobilization, 
    awareness campaigns, participatory planning, and ecosystem restoration, 
    we promote long-term environmental sustainability and biodiversity protection.`,
    impact: [
      "Community-led wetland conservation initiatives implemented",
      "Improved protection of Kimana Wetlands ecosystem",
      "Increased local awareness on environmental conservation",
      "Strengthened natural resource governance structures"
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
    title: "Environmental Health & Climate Change",
    img: ncdo1,
    desc: `This program promotes environmental health and climate resilience 
    through community-based initiatives that reduce pollution, improve sanitation, 
    and encourage sustainable environmental practices. We support climate change 
    awareness, clean energy adoption, and ecosystem protection to safeguard both 
    public health and natural resources.`,
    impact: [
      "Improved community sanitation systems",
      "Increased climate change awareness",
      "Reduction in environmental pollution hotspots",
      "Promotion of sustainable and eco-friendly practices"
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

  {
    title: "Women & Youth Empowerment",
    img: ncdo4,
    desc: `We empower women and youth through leadership training, entrepreneurship 
    support, skills development, and civic engagement initiatives. By strengthening 
    their capacity and economic opportunities, we foster inclusive participation in 
    community development and decision-making processes.`,
    impact: [
      "Women-led enterprises supported",
      "Youth trained in leadership and entrepreneurship",
      "Increased economic participation of women and youth",
      "Stronger community representation and inclusion"
    ]
  },

  {
    title: "Institutional Development",
    img: ncdo7,
    desc: `Our institutional development program strengthens local organizations, 
    community groups, and governance structures. We provide capacity building, 
    strategic planning support, financial management training, and partnership 
    development to ensure sustainable and accountable community development.`,
    impact: [
      "Improved governance and accountability systems",
      "Strengthened local community organizations",
      "Enhanced project management capacity",
      "Sustainable institutional growth and partnerships"
    ]
  }

];


  const partnerLogos = [partner1, partner2, partner3, partner4, partner5];

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
          <img src={ncdolgo} alt="NCDO Logo" className="w-16 h-10 object-contain" />
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
    className="hover:text-[#F2ECE8]"
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
////        <Link
          to="/#"
          className="hidden md:inline-block bg-[#7382AD] text-white px-3 py-1.5 rounded-md font-bold text-sm hover:bg-[#F2ECE8] hover:text-[#1D347A] transition"
        >
          ///
        </Link>

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

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1D347A] shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-4 font-semibold">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-white focus:outline-none"
          >
            ✕
          </button>
          <Link
  to="/"
  onClick={() => { 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    setMenuOpen(false); 
  }}
  className="hover:text-[#F2ECE8]"
>
  Home
</Link>

          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#F2ECE8]">Who We Are</a>
          <a href="#programs" onClick={() => setMenuOpen(false)} className="hover:text-[#F2ECE8]">Programs</a>
          <a href="#stories" onClick={() => setMenuOpen(false)} className="hover:text-[#F2ECE8]">Impact</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#F2ECE8]">Contact Us</a>
          <Link
            to="/donate"
            onClick={() => setMenuOpen(false)}
            className="bg-[#7382AD] text-white px-4 py-2 rounded-md font-bold hover:bg-[#F2ECE8] hover:text-[#1D347A] transition"
          >
            Donate Now
          </Link>
        </div>
      </div>
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
  <div className="max-w-6xl mx-auto">
    {/* Heading + Intro */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
        Who We Are
      </h2>
      <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto text-gray-700">
        NCDO is dedicated to improving the lives of vulnerable communities in Kenya. 
        was formed in the year 2005 by
some experienced youth profession-
als to address the issues related to
environmental degradation, drought miti-
gation and food security which were largely
affecting the local communities in Loitoktok
sub-county. Further it got registered formally
as a not for profit community based organi-
zation in the year 2006. Since then, NCDO in
partnership with Government, donor agen-
cies, Civil Society Organizations and com-
munities has been able to implement vari-
ous projects addressing the different issues.
      </p>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
        With over 24 years of experience, our team collaborates with local partners and 
        stakeholders to ensure impactful, measurable results for communities in need.
      </p>
    </div>

    {/* Mission, Vision, Values */}
    <div className="grid md:grid-cols-3 gap-10">
      {/* Mission */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
        <div className="flex justify-center mb-4">
          <span className="w-16 h-16 flex items-center justify-center bg-[#1D347A] text-white rounded-full text-3xl font-bold shadow-lg">
            🌍
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-[#1D347A]">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Working with communities in Loitokitok to
promote sustainable development through
resource mobilization, training and knowl-
edge dissemination”
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
        <div className="flex justify-center mb-4">
          <span className="w-16 h-16 flex items-center justify-center bg-[#7382AD] text-white rounded-full text-3xl font-bold shadow-lg">
            👁
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-[#1D347A]">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          A thriving Loitokitok community where every member has access to 
          opportunities for growth, education, and sustainable livelihoods.
        </p>
      </div>

      {/* Values */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center">
        <div className="flex justify-center mb-4">
          <span className="w-16 h-16 flex items-center justify-center bg-yellow-500 text-white rounded-full text-3xl font-bold shadow-lg">
            🤝
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-[#1D347A]">Our Values</h3>
        <p className="text-gray-700 leading-relaxed">
          Community collaboration, transparency, sustainability, and empowerment 
          guide everything we do in service of our neighbors.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section id="cta" className="py-20 px-6 text-center" style={{ backgroundColor: "#1D347A" }}>
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the movement for change! Be a catalyst for transformation.
            
          </h2>
          <p className="mb-6 text-lg">
            Volunteer with us to shape a better future together.Ready to make a difference?Contact us to learn more about our programs or get involved
          </p>
          <div className="space-x-4">
            <a
              href="/donate"
              className="inline-block bg-[#1D347A] text-white px-5 py-2 rounded-md font-bold hover:bg-[#C7B7B3] transition"
            >
              Volunteer Now
            </a>
           
          </div>
        </div>
      </section>

   {/* Programs Section */}
<section id="programs" className="py-20 px-6 bg-[#F2ECE8]">
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




{/* Real Stories Section */}
<section id="stories" className="py-20 px-6 bg-[#F2ECE8]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-[#1D347A] mb-4">
      Real Stories of Transformation
    </h2>
    <p className="text-lg text-gray-700 mb-12">
      Measurable progress and meaningful change in our community
    </p>

    {/* Education Block */}
    <div className="mb-20">
      <div
        className="relative bg-cover bg-center rounded-2xl shadow-lg overflow-hidden"
        style={{ backgroundImage: `url(${require("../images/ncdo3.jpg")})` }}
      >
        <div className="bg-[#1D347A]/80 p-10 text-white">
          <h3 className="text-3xl font-bold mb-3">
            Transforming Lives Through Education
          </h3>
          <p className="max-w-3xl mx-auto mb-8">
            Since 2020, our education support program has provided scholarships
            to over 200 students, built 3 new classrooms, and established a
            computer lab that serves 500+ students annually. The graduation rate
            in our partner schools has increased by 40%.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-xl font-bold text-[#1D347A]">
            🎓 200+ Scholarships Awarded
          </h4>
          <p className="text-gray-600 mt-2">
            Supporting students from primary to university level
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-xl font-bold text-[#1D347A]">
            📈 40% Increase in Graduation Rates
          </h4>
          <p className="text-gray-600 mt-2">
            Measurable improvement in educational outcomes
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-xl font-bold text-[#1D347A]">🏆 Educational Excellence</h4>
          <p className="text-gray-600 mt-2">Building brighter futures</p>
        </div>
      </div>
    </div>

    {/* Community Health Block */}
    <div>
      <div
        className="relative bg-cover bg-center rounded-2xl shadow-lg overflow-hidden"
        style={{ backgroundImage: `url(${require("../images/ncdo3.jpg")})` }}
      >
        <div className="bg-[#1D347A]/80 p-10 text-white">
          <h3 className="text-3xl font-bold mb-3">Improving Community Health</h3>
          <p className="max-w-3xl mx-auto mb-8">
            Our mobile health clinics have reached over 2,000 community members,
            providing essential healthcare services. We've also trained 50
            community health workers and established 2 permanent health posts in
            remote areas.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-xl font-bold text-[#1D347A]">👩‍⚕️ 2,000+ People Served</h4>
          <p className="text-gray-600 mt-2">
            Through mobile clinics and health outreach
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-xl font-bold text-[#1D347A]">💊 50 Health Workers Trained</h4>
          <p className="text-gray-600 mt-2">
            Building local healthcare capacity
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h4 className="text-xl font-bold text-[#1D347A]">🏥 Community Health Access</h4>
          <p className="text-gray-600 mt-2">
            Establishing permanent health posts in remote areas
          </p>
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
